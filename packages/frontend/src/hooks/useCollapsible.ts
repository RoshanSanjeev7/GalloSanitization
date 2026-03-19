import { useState, useCallback } from 'react';

/**
 * Hook for managing collapsible section state
 */
export function useCollapsible(defaultCollapsed: Record<string, boolean> = {}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(defaultCollapsed);

  const toggle = useCallback((key: string) => {
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const isCollapsed = useCallback((key: string): boolean => {
    return collapsed[key] ?? false;
  }, [collapsed]);

  const collapseAll = useCallback((keys: string[]) => {
    setCollapsed(keys.reduce((acc, key) => ({ ...acc, [key]: true }), {}));
  }, []);

  const expandAll = useCallback(() => {
    setCollapsed({});
  }, []);

  return { collapsed, toggle, isCollapsed, collapseAll, expandAll };
}
