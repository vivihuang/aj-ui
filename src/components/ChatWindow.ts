import { createElement } from '../utils/node'
import ChatHeader from './ChatHeader'
import Conversation from './Conversions'
import Input from './Input';
import config from '../config';

const ChatWindow = () => {
  const wrapper = createElement('div', { class: ['bubble-container', 'active'] });

  const chatHeader = ChatHeader({
    text: config.chat.headerText,
    closable: true,
    close: () => {
      wrapper.classList.remove('active');
    },
  });
  
  const conversation = Conversation();
  const input = Input();
  
  wrapper.appendChild(chatHeader)
  wrapper.appendChild(conversation)
  wrapper.appendChild(input)
  return wrapper;
}

export default ChatWindow;
