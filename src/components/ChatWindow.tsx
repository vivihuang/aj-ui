import { h } from 'preact';

import ChatHeader from './ChatHeader'
import Conversation from './Conversation'
import Input from './Input';
import { initState } from '../store';
import { useReducer } from 'preact/hooks';
import { reducer } from '../store/reducer';
import { sendMessage } from '../utils/request';

interface ChatWindowProps {
  config: ChatbotConfig;
  showWindow: boolean;
  setShowWindow: (show: boolean) => void;
}

const ChatWindow = ({ config, showWindow, setShowWindow }: ChatWindowProps) => {
  const { chat } = config;
  const [{ conversation }] = useReducer(reducer, initState);

  const handleMessage = (message: string) => {
    console.log(message);
    sendMessage(message)
      .then((response: any) => {
        // TODO: append to conversation history
        return response;
      })
      .catch((error: any) => {
        // TODO: error handling
        console.error(error);
      });
  };

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
    <Input sendMessage={handleMessage} />
  </div>)
};

export default ChatWindow;
