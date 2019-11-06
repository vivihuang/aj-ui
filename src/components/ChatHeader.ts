import { createElement } from '../utils/node'

const ChatHeader = () => {
  const header = createElement('div', { class: 'chat-header' });
  header.innerText = 'Ask Jamie @ onePA'
  return header
}

export default ChatHeader
