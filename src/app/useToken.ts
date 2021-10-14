import { createContext } from 'react';

/**
 * 泛型约束获取注入令牌
 *
 * @param {(...args: any[])} func
 * @param {(T | undefined)} [initialValue=undefined]
 * @returns
 */
export default function useToken<T>(
  func: (...args: any[]) => T,
  initialValue: T | undefined = undefined,
) {
  return createContext(initialValue as T);
}
