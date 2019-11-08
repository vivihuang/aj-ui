import { h } from 'preact';

import ChatHeader from './ChatHeader'
import Conversation from './Conversation'
import Input from './Input';
import { initState } from '../store';
import { useReducer } from 'preact/hooks';
import { reducer } from '../store/reducer';

interface ChatWindowProps {
  config: ChatbotConfig;
  showWindow: boolean;
  setShowWindow: (show: boolean) => void;
}

const ChatWindow = ({ config, showWindow, setShowWindow }: ChatWindowProps) => {
  const { chat } = config;
  const [{ conversation }] = useReducer(reducer, initState);

  return (<div className={`bubble-container ${showWindow ? 'active' : 'inactive'}`}>
    <ChatHeader
      text={chat.headerText}
      avatarSrc={chat.avatar}
      closable={true}
      close={() => {
        setShowWindow(false);
      }}
    />
    <Conversation conversation={conversation} />
    <Input />
  </div>)
};

export default ChatWindow;
