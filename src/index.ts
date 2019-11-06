import './index.scss'

import { Bubbles } from './components/Bubbles'
import { createDom } from './utils/node'
import config from './config';

interface Convo {
  [key: string]: {
    says?: string[];
    reply?: {
      question: string;
      answer: string;
    }[];
  };
}

const convo: Convo = {
  ice: {
    says: config.chat.defaultGreetings,
  },
};

const uuid = +new Date();

const ajContainer = createDom('div', { class: 'rasa-chat-container' });
const bubbleContainer = createDom('div', { id: 'chat' });
const chatButton = createDom('button', { class: 'chat-button', text: config.chat.buttonText })
chatButton.addEventListener('click', () => {
  bubbleContainer.classList.toggle('active');
});

const chatWindow = new Bubbles(bubbleContainer, 'chatWindow', {
  minimizeChatWindow: () => {
    bubbleContainer.classList.remove('active');
  },
  inputCallbackFn (o: any) {
    console.log('send', o)
    chatWindow.think();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${config.engine.host}${config.engine.endpoint}`, true);
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.getResponseHeader('content-type') === 'application/json') {
          const result = JSON.parse(xhr.responseText)
          console.log('result', result)
          chatWindow.reply({
            says: result.map((item: any) => {
              if (item.image) return `<img src="${item.image}">`
              return item.text
            }),
          })
        } else {
          console.log(xhr.responseText)
        }
      }
    };
    xhr.send(JSON.stringify({
      'sender': uuid,
      'message': o.input,
    }));
  },
});

chatButton.addEventListener('click', () => {
  chatWindow.talk(convo)
}, { once: true })

ajContainer.appendChild(chatButton);
ajContainer.appendChild(bubbleContainer);
document.body.appendChild(ajContainer);

declare global {
  interface Window {
    chatWindow: any;
  }
}

window.chatWindow = chatWindow;
