import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld);
  
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div>Hello world</div>')
  })
})
