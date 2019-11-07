// import { createElement } from '../utils/node';
import { h } from 'preact';

// const Input = () => {
//   const wrapper =  createElement('div', {
//     class: 'input-wrap'
//   })
//   const textarea = createElement('textarea')
//   wrapper.appendChild(textarea)
//   return wrapper
// }

const Input = () => {
  return (<div className='input-wrap'>
      <textarea />
    </div>)
};

export default Input;

