import React from 'react';
import AutoComplete, { DataSourceType } from '../';
import '../style';

// ========== 同步数据源 ==========
const fruits = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'blueberry',
  'cherry',
  'coconut',
  'cranberry',
  'grape',
  'grapefruit',
  'guava',
  'kiwi',
  'lemon',
  'lime',
  'mango',
  'melon',
  'orange',
  'papaya',
  'peach',
  'pear',
  'pineapple',
  'plum',
  'raspberry',
  'strawberry',
  'watermelon',
];

const handleFetchSync = (query: string) => {
  return fruits
    .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
    .map((name) => ({ value: name }));
};

// ========== 异步数据源（模拟远程搜索） ==========
interface GithubUser {
  login: string;
  avatar_url: string;
}

const handleFetchAsync = (
  query: string,
): Promise<DataSourceType<{ login: string; avatar: string }>[]> => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items = [] }) =>
      items.slice(0, 10).map((user: GithubUser) => ({
        value: user.login,
        login: user.login,
        avatar: user.avatar_url,
      })),
    );
};

// ========== 自定义渲染模板 ==========
const renderGithubUser = (item: DataSourceType) => {
  const user = item as DataSourceType<{ login: string; avatar: string }>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <img
        src={user.avatar}
        alt={user.login}
        style={{ width: 24, height: 24, borderRadius: '50%' }}
      />
      <span>{user.login}</span>
    </div>
  );
};

export default () => {
  return (
    <div style={{ maxWidth: 380 }}>
      {/* 同步搜索 + 默认高亮匹配 */}
      <h3>同步搜索（带高亮）</h3>
      <AutoComplete
        fetchSuggestions={handleFetchSync}
        placeholder="输入水果名称，如 apple"
        onSelect={(item) => console.log('selected:', item)}
        style={{ marginBottom: 24 }}
      />

      {/* 不同尺寸 */}
      <h3>不同尺寸</h3>
      <AutoComplete
        fetchSuggestions={handleFetchSync}
        placeholder="大号 lg"
        size="lg"
        style={{ marginBottom: 8 }}
      />
      <AutoComplete
        fetchSuggestions={handleFetchSync}
        placeholder="默认大小"
        style={{ marginBottom: 8 }}
      />
      <AutoComplete
        fetchSuggestions={handleFetchSync}
        placeholder="小号 sm"
        size="sm"
        style={{ marginBottom: 24 }}
      />

      {/* 异步远程搜索 + 自定义模板 */}
      <h3>异步搜索 GitHub 用户（自定义模板）</h3>
      <AutoComplete
        fetchSuggestions={handleFetchAsync}
        renderOption={renderGithubUser}
        placeholder="输入 GitHub 用户名"
        onSelect={(item) => console.log('selected github user:', item)}
        style={{ marginBottom: 24 }}
      />

      {/* 禁用状态 */}
      <h3>禁用状态</h3>
      <AutoComplete fetchSuggestions={handleFetchSync} placeholder="禁用的 AutoComplete" disabled />
    </div>
  );
};
