import { h } from 'preact';

import ChatWindow from './components/ChatWindow';
import Switcher from './components/Switcher';
import { useState } from 'preact/hooks';
import { AppConfig, ConversationProvider } from './store';

const Chatbot = () => {
  const [showWindow, setShowWindow] = useState(false);
  return (<AppConfig.Consumer>
    {
      (config: ChatbotConfig) => (
        <ConversationProvider>
          <div className={`chatbot-placement-${config.chat.placement}`}>
            <ChatWindow config={config} showWindow={showWindow} setShowWindow={setShowWindow} />
            <Switcher text={config.chat.buttonText} onClick={() => {
              setShowWindow(!showWindow);
            }} />
          </div>
        </ConversationProvider>
      )
    }
  </AppConfig.Consumer>);
};

export default Chatbot;
