import { useEffect, RefObject } from 'react';

/**
 * useClickOutside - 监听点击元素外部事件
 * @param ref     目标元素的 ref
 * @param handler 点击外部时的回调
 */
function useClickOutside(ref: RefObject<HTMLElement>, handler: (e: MouseEvent) => void) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;
