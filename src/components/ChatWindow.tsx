import { h } from 'preact';

import ChatHeader from './ChatHeader'
import Conversation from './Conversation'
import Input from './Input';
import { state } from '../store';

const ChatWindow = ({ config }: { config: ChatbotConfig }) => {
  const { chat } = config;
  return (<div className='bubble-container active'>
    <ChatHeader
      text={chat.headerText}
      avatarSrc={chat.avatar}
      closable={true}
      close={() => {
        console.log('test')
      }}
    />
    <Conversation conversation={state.conversation} />
    <Input />
  </div>)
};

export default ChatWindow;
