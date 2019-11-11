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

const ChatWindow = ({ config, showWindow, setShowWindow }: ChatWindowProps) => {
  const { chat } = config;
  const initialConversation = chat.defaultGreetings
    ? chat.defaultGreetings.map((text: string): BotResponse => ({
      // TODO: ID to be replaced
      recipient_id: 'bot_test',
      text,
    })) : [];
  const [conversation, setConversation] = useState<Message[]>(initialConversation);

  const handleMessage = (message: string) => {
    return sendMessage(message)
      .then((response: any) => {
        setConversation([
          ...conversation,
          {
            sender: 'todo: something I will take care later',
            text: message,
          },
          ...response,
        ]);
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
