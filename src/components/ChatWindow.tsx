import { h } from 'preact';

import ChatHeader from './ChatHeader'
import Conversation from './Conversation'
import Input from './Input';
import { useConversationState } from '../store';
import { INIT_CONVERSATION } from '../store/constants';

interface ChatWindowProps {
  config: ChatbotConfig;
  showWindow: boolean;
  setShowWindow: (show: boolean) => void;
}

const ChatWindow = ({ config, showWindow, setShowWindow }: ChatWindowProps) => {
  const { chat } = config;
  const [{ sender = '', history }, dispatch] = useConversationState();

  if (history.length === 0 && chat.defaultGreetings) {
    dispatch({
      type: INIT_CONVERSATION,
      payload: chat.defaultGreetings.map((text: string): BotResponse => ({
        recipient_id: sender,
        buttons: [],
        text,
        image: null,
      }))
    })
  }

  return (<div className={`bubble-container ${showWindow ? 'active' : 'inactive'}`}>
    <ChatHeader
      text={chat.headerText}
      avatarSrc={chat.avatar}
      closable={true}
      close={() => {
        setShowWindow(false);
      }}
    />
    <Conversation />
    <Input />
  </div>)
};

export default ChatWindow;
