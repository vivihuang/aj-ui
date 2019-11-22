import './index.scss';

import { h, render } from 'preact';

import { CONFIG_DF, CONFIG_RASA } from './config';
import Chatbot from './Chatbot';
import { useState } from 'preact/hooks';
import { AppConfig } from './store';

const EngineSwitch = () => {
  const [config, setEngine] = useState<ChatbotConfig>(CONFIG_RASA);
  const switchEngine = () => {
    if (config.engine.name === 'Rasa') {
      setEngine(CONFIG_DF)
    } else {
      setEngine(CONFIG_RASA)
    }
  };

  return (
    <div>
      <h3>Current engine: {config.engine.name}</h3>
      <button onClick={switchEngine} className='switch-engine-button'>Switch!</button>
      <AppConfig.Provider value={config}>
        <Chatbot />
      </AppConfig.Provider>
    </div>
  )
};

render(<EngineSwitch />, document.getElementById('ask-jamie') as Element);
