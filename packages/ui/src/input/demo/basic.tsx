import React, { useState, useRef } from 'react';
import { faSearch, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Input from '../';
import '../style';

export default () => {
  // ========== 受控模式 ==========
  const [controlledValue, setControlledValue] = useState('');

  // ========== 非受控模式（通过 ref 读取原生 input 的值） ==========
  const uncontrolledRef = useRef<HTMLInputElement>(null);
  const [snapshot, setSnapshot] = useState('');

  return (
    <div style={{ maxWidth: 380 }}>
      {/* 非受控模式 */}
      <h3>非受控模式</h3>
      <Input
        ref={uncontrolledRef}
        placeholder="非受控模式"
        defaultValue="hello"
        style={{ marginBottom: 8 }}
      />
      <button
        onClick={() => setSnapshot(uncontrolledRef.current?.value ?? '')}
        style={{ marginBottom: 16 }}
      >
        读取 ref 值
      </button>
      {snapshot && <p>通过 ref 读取的值：{snapshot}</p>}

      {/* 受控模式 */}
      <h3>受控模式</h3>
      <Input
        placeholder="受控模式"
        value={controlledValue}
        onChange={(e) => setControlledValue(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <p>当前值：{controlledValue}</p>

      {/* 禁用 */}
      <h3>禁用状态</h3>
      <Input placeholder="禁用输入框" disabled style={{ marginBottom: 16 }} />

      {/* 不同尺寸 */}
      <h3>不同尺寸</h3>
      <Input placeholder="大号 lg" size="lg" style={{ marginBottom: 8 }} />
      <Input placeholder="默认大小" style={{ marginBottom: 8 }} />
      <Input placeholder="小号 sm" size="sm" style={{ marginBottom: 16 }} />

      {/* 带图标 */}
      <h3>带图标</h3>
      <Input placeholder="搜索..." icon={faSearch} style={{ marginBottom: 8 }} />
      <Input placeholder="提示信息" icon={faExclamationCircle} style={{ marginBottom: 16 }} />

      {/* 前缀 / 后缀 */}
      <h3>前缀 / 后缀</h3>
      <Input prepend="https://" placeholder="example.com" style={{ marginBottom: 8 }} />
      <Input append=".com" placeholder="mysite" style={{ marginBottom: 8 }} />
      <Input prepend="https://" append=".com" placeholder="mysite" style={{ marginBottom: 16 }} />
    </div>
  );
};
