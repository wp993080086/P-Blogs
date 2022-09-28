/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 任意类型
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type TAny = any

// 泛型对象字典
declare type TDict<T = TAny> = {
  [key: string]: T
}

// 任意函数
declare type TFunc<T = TAny> = (...args: TAny[]) => T
