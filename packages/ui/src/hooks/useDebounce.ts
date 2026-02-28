import { useState, useEffect } from 'react';

/**
 * useDebounce - 对值进行防抖处理
 * @param value  需要防抖的值
 * @param delay  防抖延迟（毫秒），默认 300ms
 */
function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
