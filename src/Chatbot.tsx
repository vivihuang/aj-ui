import { h } from 'preact';

import ChatWindow from './components/ChatWindow';
import Switcher from './components/Switcher';

const Chatbot = ({ config }: { config: ChatbotConfig}) => {
  return (<div>
    <ChatWindow config={config} />
    <Switcher text={config.chat.buttonText} onClick={() => {
      console.log('close it');
    }} />
  </div>)
};

export default Chatbot;
