import { createElement } from '../utils/node'
import ChatHeader from './ChatHeader'
import Conversation from './Conversions'
import Input from './Input'

const ChatWindow = () => {
  const chatHeader = ChatHeader()
  const conversation = Conversation()
  const input = Input()
  const wrapper = createElement('div', { class: ['bubble-container', 'active'] })
  wrapper.appendChild(chatHeader)
  wrapper.appendChild(conversation)
  wrapper.appendChild(input)
  return wrapper
}

export default ChatWindow;
