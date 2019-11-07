import { createElement } from '../utils/node'
import ChatHeader from './ChatHeader'
import Conversation from './Conversation'
import Input from './Input';
import config from '../config';
import state from "../state";

const ChatWindow = () => {
  const wrapper = createElement('div', { class: ['bubble-container', 'active'] });

  const chatHeader = ChatHeader({
    text: config.chat.headerText,
    avatarSrc: config.chat.avatar,
    closable: true,
    close: () => {
      wrapper.classList.remove('active');
    },
  });

  const conversation = Conversation({
    conversation: state.conversation,
  });
  const input = Input();

  wrapper.appendChild(chatHeader)
  wrapper.appendChild(conversation)
  wrapper.appendChild(input)
  return wrapper;
}

export default ChatWindow;
