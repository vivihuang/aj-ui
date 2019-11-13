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
  const [uuid, setUuid] = useState<string>('');
  const { chat } = config;
  const initialConversation = chat.defaultGreetings
    ? chat.defaultGreetings.map((text: string): BotResponse => ({
      recipient_id: uuid,
      text,
      image: null,
    })) : [];
  const [conversation, setConversation] = useState<Message[]>(initialConversation);

  const handleMessage = (text: string) => {
    const userInput = {
      sender: uuid,
      text,
    };
    return sendMessage(userInput).then((response: BotResponse[]) => {
        if (response.length > 0 && response[0].recipient_id) {
          setUuid(response[0].recipient_id);
        }

        setConversation([
          ...conversation,
          userInput,
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
