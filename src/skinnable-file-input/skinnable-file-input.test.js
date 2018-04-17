import { shallow } from 'vue-test-utils'

import SkinnableFileInput from './skinnable-file-input'


describe('<SkinnableFileInput>', () => {
  it('renders passed child element', () => {
    const wrapper = shallow(SkinnableFileInput, {
      slots: {
        default: '<button>hi</button>'
      }
    })

    expect(wrapper.find('button').element.textContent).toBe('hi')
  })

  it('sets passed class on container', () => {
    const wrapper = shallow(SkinnableFileInput, {
      propsData: {
        containerClass: 'test-class'
      }
    })

    expect(wrapper.classes()).toContain('test-class')
  })

  it('triggers passed onChange handler when a file is selected', () => {
    const onChange = jest.fn()
    const wrapper = shallow(SkinnableFileInput, {
      propsData: { onChange }
    })

    wrapper.find('input[type="file"]').trigger('change', { data: 'foo' })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange.mock.calls[0][0].data).toBe('foo')
  })

  it('passes appropriate properties to the underlying file input', () => {
    const wrapper = shallow(SkinnableFileInput, {
      propsData: {
        inputProps: {
          multiple: true,
        }
      }
    })

    expect(wrapper.find('input[type="file"]').element.multiple).toBe(true)
  })
})
