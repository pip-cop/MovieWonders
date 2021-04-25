import { mount } from '@vue/test-utils'
import TabHome from '@/views/TabHome.vue'

describe('TabHome.vue', () => {
  it('renders tab home view', () => {
    const wrapper = mount(TabHome)
    expect(wrapper.text()).toMatch('Home')
  })
})
