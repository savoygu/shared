import { fireEvent, queryByText, render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import CollapseTransition from './collapse-transition.test.vue'

describe('collapse-transition', () => {
  it('works', async () => {
    const { getByText } = render(CollapseTransition)
    const containerNode = screen.getByTestId('container')
    // 初始内容
    expect(containerNode).toMatchInlineSnapshot(`
      <div
        data-testid="container"
      >
        <button>
          Toggle
        </button>
        <!--v-if-->
      </div>
    `)
    let hello = queryByText(containerNode, 'Hello')
    expect(hello).toBeNull()

    // 首次点击，展示内容
    await fireEvent.click(getByText('Toggle'))
    expect(getByText('Hello')).toMatchInlineSnapshot(`
      <p>
        Hello
      </p>
    `)
    expect(getByText('Hello')).not.toBeNull()

    // // 再次点击，隐藏内容
    await fireEvent.click(getByText('Toggle'))
    hello = queryByText(containerNode, 'Hello')
    expect(hello).toBeNull()
  })
})
