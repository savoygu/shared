import { CollapseTransition } from '@shared/vue/components'
import { fireEvent, queryByText, render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { defineComponent, ref } from 'vue'

const CollapseTransitionTest = defineComponent({
  setup() {
    const show = ref(false)
    const toggle = () => {
      show.value = !show.value
    }
    return () => (
      <div data-testid="container">
        <button onClick={toggle}>Toggle</button>
        <CollapseTransition>
          {show.value && (
            <div>
              <p>Hello</p>
            </div>
          )}
        </CollapseTransition>
      </div>
    )
  }
})

describe('collapse-transition', () => {
  it('works', async () => {
    const { getByText } = render(CollapseTransitionTest)
    const containerNode = screen.getByTestId('container')
    // 初始内容
    expect(containerNode).toMatchInlineSnapshot(`
      <div
        data-testid="container"
      >
        <button>
          Toggle
        </button>
        <transition-stub>
          
          
        </transition-stub>
      </div>
    `)
    expect(queryByText(containerNode, 'Hello')).toBeNull()

    // 首次点击，展示内容
    await fireEvent.click(getByText('Toggle'))
    expect(queryByText(containerNode, 'Hello')).not.toBeNull()

    // // 再次点击，隐藏内容
    await fireEvent.click(getByText('Toggle'))
    expect(queryByText(containerNode, 'Hello')).toBeNull()
  })
})
