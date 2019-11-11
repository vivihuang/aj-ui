import { h } from 'preact';

import ChatHeader from './ChatHeader'
import Conversation from './Conversation'
import Input from './Input';
import { useState } from 'preact/hooks';
import { sendMessage } from '../utils/request';

interface ChatWindowProps {
  config: ChatbotConfig;
  showWindow: boolean;
  setShowWindow: (show: boolean) => void;
}

const initialConversation = [
  {
    sender: 'test1',
    message: 'Hello',
  },
  {
    recipient_id: 'test1',
    text: 'Hi, I am Jamie',
  },
];

const ChatWindow = ({ config, showWindow, setShowWindow }: ChatWindowProps) => {
  const { chat } = config;
  const [conversation, setConversation] = useState(initialConversation);

  const handleMessage = (message: string) => {
    sendMessage(message)
      .then((response: any) => {
        setConversation([
          ...conversation,
          {
            sender: 'todo: something I will take care later',
            message,
          },
          ...response,
        ]);
        // return response;
      })
      .catch((error: any) => {
        // TODO: Display an error message to the user
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
