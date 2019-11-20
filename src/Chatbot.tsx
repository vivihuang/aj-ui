import { h } from 'preact';

import ChatWindow from './components/ChatWindow';
import Switcher from './components/Switcher';
import { useState } from 'preact/hooks';
import { ConversationProvider } from './store';

const Chatbot = ({ config }: { config: ChatbotConfig}) => {
  const [showWindow, setShowWindow] = useState(false);
  return (<ConversationProvider>
    <div>
      <ChatWindow config={config} showWindow={showWindow} setShowWindow={setShowWindow} />
      <Switcher text={config.chat.buttonText} onClick={() => {
        setShowWindow(!showWindow);
        }} />
    </div>
  </ConversationProvider>);
};

export default Chatbot;
