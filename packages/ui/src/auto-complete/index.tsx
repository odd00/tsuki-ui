import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from 'react';
import clsx from 'clsx';
import Input, { InputProps } from '../input';
import Icon from '../icon';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce, useClickOutside } from '../hooks';

/**
 * DataSourceObject 基础类型，包含 value 字段
 */
export interface DataSourceObject {
  value: string;
}

/**
 * 泛型数据源类型：用户自定义字段 T 与 DataSourceObject 的交集
 */
export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect' | 'onChange'> {
  /**
   * @description 返回输入建议的方法，可以拿到当前的输入，然后返回同步的数组或者是异步的 Promise
   */
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  /**
   * @description 点击选中建议项时触发的回调
   */
  onSelect?: (item: DataSourceType) => void;
  /**
   * @description 文本框发生改变的时候触发的事件
   */
  onChange?: (value: string) => void;
  /**
   * @description 支持自定义渲染下拉项，返回 ReactElement
   */
  renderOption?: (item: DataSourceType) => ReactElement;
}

const prefixCls = 'tsuki-auto-complete';

/**
 * AutoComplete 自动补全组件
 *
 * 支持防抖搜索、键盘导航、点击外部关闭、自定义渲染模板、异步远程搜索。
 */
const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    onChange,
    renderOption,
    value: propValue,
    ...restProps
  } = props;

  // ==================== State ====================
  const [inputValue, setInputValue] = useState<string>((propValue as string) ?? '');
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  // 防抖后的输入值
  const debouncedValue = useDebounce(inputValue, 300);

  // 标记是否由选中触发的值变化（选中后不应再次搜索）
  const triggerSearch = useRef(true);

  // 组件根节点 ref —— 用于 clickOutside
  const componentRef = useRef<HTMLDivElement>(null);

  // ==================== Click Outside ====================
  useClickOutside(componentRef as React.RefObject<HTMLElement>, () => {
    setShowDropdown(false);
  });

  // ==================== 防抖搜索 ====================
  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(debouncedValue);

      if (results instanceof Promise) {
        setLoading(true);
        results
          .then((data) => {
            setSuggestions(data);
            if (data.length > 0) {
              setShowDropdown(true);
            }
          })
          .catch(() => {
            setSuggestions([]);
            setShowDropdown(false);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setSuggestions(results);
        if (results.length > 0) {
          setShowDropdown(true);
        }
      }
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
    setHighlightIndex(-1);
  }, [debouncedValue, fetchSuggestions]);

  // ==================== 高亮文本渲染 ====================
  const highlightText = (text: string, query: string): ReactElement => {
    if (!query) return <>{text}</>;
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return <>{text}</>;
    const before = text.slice(0, index);
    const match = text.slice(index, index + query.length);
    const after = text.slice(index + query.length);
    return (
      <>
        {before}
        <span className={`${prefixCls}-highlight`}>{match}</span>
        {after}
      </>
    );
  };

  // ==================== 事件处理 ====================
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInputValue(val);
      triggerSearch.current = true;
      onChange?.(val);
    },
    [onChange],
  );

  const handleSelect = useCallback(
    (item: DataSourceType) => {
      setInputValue(item.value);
      setShowDropdown(false);
      setSuggestions([]);
      triggerSearch.current = false;
      onSelect?.(item);
      onChange?.(item.value);
    },
    [onSelect, onChange],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightIndex >= 0 && highlightIndex < suggestions.length) {
            handleSelect(suggestions[highlightIndex]);
          }
          break;
        case 'Escape':
          setShowDropdown(false);
          setHighlightIndex(-1);
          break;
        default:
          break;
      }
    },
    [suggestions, highlightIndex, handleSelect],
  );

  const handleFocus = useCallback(() => {
    if (suggestions.length > 0) {
      setShowDropdown(true);
    }
  }, [suggestions]);

  // ==================== 渲染建议项 ====================
  const renderSuggestionItem = (item: DataSourceType) => {
    if (renderOption) {
      return renderOption(item);
    }
    return <>{highlightText(item.value, inputValue)}</>;
  };

  // ==================== 渲染下拉列表 ====================
  const renderDropdown = () => {
    if (!showDropdown) return null;

    if (loading) {
      return (
        <ul className={`${prefixCls}-dropdown`}>
          <li className={`${prefixCls}-dropdown-loading`}>
            <Icon icon={faSpinner} spin />
          </li>
        </ul>
      );
    }

    if (suggestions.length === 0) return null;

    return (
      <ul className={`${prefixCls}-dropdown`}>
        {suggestions.map((item, index) => {
          const classes = clsx(`${prefixCls}-dropdown-item`, {
            [`${prefixCls}-dropdown-item-active`]: index === highlightIndex,
          });
          return (
            <li
              key={index}
              className={classes}
              onMouseDown={(e) => {
                // 使用 mousedown + preventDefault 防止 input blur 提前触发
                e.preventDefault();
                handleSelect(item);
              }}
              onMouseEnter={() => setHighlightIndex(index)}
            >
              {renderSuggestionItem(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  // ==================== Render ====================
  return (
    <div className={prefixCls} ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        {...restProps}
      />
      {renderDropdown()}
    </div>
  );
};

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
