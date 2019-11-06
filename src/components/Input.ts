import { createElement } from '../utils/node'

const Input = () => {
  const wrapper =  createElement('div', {
    class: 'input-wrap'
  })
  const textarea = createElement('textarea')
  wrapper.appendChild(textarea)
  return wrapper
}

export default Input;

