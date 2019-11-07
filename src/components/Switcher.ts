import { createElement } from '../utils/node';

interface SwitcherOptions {
  text: string;
  onClick: () => void;
}

const Switcher = (options: SwitcherOptions) => {
  const { text, onClick } = options;
  const button = createElement('button', { class: 'chat-button' });
  button.innerText = text;
  button.addEventListener('click', onClick);
  return button;
};

export default Switcher;
