/**
 * From https://github.com/ElemeFE/element/blob/master/src/utils/dom.js
 * 通用 DOM 操作
 */

/**
 * 判断 DOM 元素是否含有 class
 * @param el DOM 元素
 * @param cls 类
 * @returns
 */
export function hasClass(el: HTMLElement, cls: string) {
  if (!el || !cls) return false
  if (cls.includes(' ')) throw new Error('className should not contain space.')
  return el.classList.contains(cls)
}

/**
 * 为 DOM 元素添加 class
 * @param el DOM 元素
 * @param cls 类
 * @returns
 */
export function addClass(el: HTMLElement, cls: string) {
  if (!el || !cls.trim()) return
  const classes = cls.split(' ').filter((c) => c.trim())
  el.classList.add(...classes)
}

/**
 * 移除 DOM 元素 class
 * @param el DOM 元素
 * @param cls 类
 * @returns
 */
export function removeClass(el: HTMLElement, cls: string) {
  if (!el || !cls.trim()) return
  const classes = cls.split(' ').filter((c) => c.trim())
  el.classList.remove(...classes)
}
