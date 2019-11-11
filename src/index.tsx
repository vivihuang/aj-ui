import './index.scss';

import { render, h } from 'preact';

import config from './config';
import Chatbot from './Chatbot';
// import { createChatbotJunior } from './ChatbotJunior';

// createChatbotJunior();

render(<Chatbot config={config} />, document.getElementById('ask-jamie') as Element);
