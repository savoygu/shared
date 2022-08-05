import { addClass, hasClass, removeClass } from '@shared/utils/dom'
import { describe, expect, it } from 'vitest'

const initDOM = () => {
  const div = document.createElement('div')
  div.setAttribute('data-testid', 'container')
  div.innerHTML = `<span>hello</span>`
  return div
}

describe('dom', () => {
  it('addClass', () => {
    const container = initDOM()
    addClass(container, 'class-one')
    expect(hasClass(container, 'class-one')).toBe(true)

    addClass(container, 'class-two class-three')
    expect(hasClass(container, 'class-two')).toBe(true)
    expect(hasClass(container, 'class-three')).toBe(true)
  })

  it('removeClass', () => {
    const container = initDOM()
    addClass(container, 'class-one class-two class-three')

    expect(hasClass(container, 'class-one')).toBe(true)
    removeClass(container, 'class-one')
    expect(hasClass(container, 'class-one')).toBe(false)

    expect(hasClass(container, 'class-two')).toBe(true)
    expect(hasClass(container, 'class-three')).toBe(true)
    removeClass(container, 'class-two class-three')
    expect(hasClass(container, 'class-two')).toBe(false)
    expect(hasClass(container, 'class-three')).toBe(false)
  })
})
