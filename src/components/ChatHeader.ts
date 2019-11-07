import { createElement } from '../utils/node'

interface ChatHeaderOptions {
  text: string;
  closable?: boolean;
  close?: () => void;
}

const ChatHeader = (options: ChatHeaderOptions) => {
  const { text, closable = true, close } = options;
  const header = createElement('div', { class: 'chat-header' });
  const headline = createElement('div', {
    text,
  });
  header.appendChild(headline);
  if (closable && typeof close === 'function') {
    const closeButton = createElement('a', { text: 'x', class: 'minimize-button' });
    closeButton.addEventListener('click', close);
    header.appendChild(closeButton);
  }
  return header;
}

export default ChatHeader;
