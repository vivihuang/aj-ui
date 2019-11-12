import './index.scss';

import { h, render } from 'preact';

import config from './config';
import Chatbot from './Chatbot';

render(<Chatbot config={config} />, document.getElementById('ask-jamie') as Element);
