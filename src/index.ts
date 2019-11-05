import './index.scss'

import { Bubbles } from './components/Bubbles'
import { createDom } from './utils/node'

declare global {
  interface Window {
    chatWindow: any
  }
}

const uuid = +new Date();
const rasaHost = 'http://localhost:5005';

const ajContainer = createDom('div', { class: 'rasa-chat-container' });
const bubbleContainer = createDom('div', { id: 'chat' });
const chatButton = createDom('button', { class: 'chat-button', text: 'Ask Jamie' })
chatButton.addEventListener('click', () => {
  bubbleContainer.classList.toggle('active')
});
chatButton.addEventListener('click', () => {
  chatWindow.talk(convo)
}, { once: true })

ajContainer.appendChild(chatButton);
ajContainer.appendChild(bubbleContainer);
document.body.appendChild(ajContainer);

const chatWindow = new Bubbles(bubbleContainer, 'chatWindow', {
  inputCallbackFn (o: any) {
    console.log('send', o)
    chatWindow.think();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${rasaHost}/webhooks/rest/webhook`, true);
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.getResponseHeader('content-type') === 'application/json') {
          var result = JSON.parse(xhr.responseText)
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

interface Convo {
  [key: string]: {
    says?: string[]
    reply?: {
      question: string
      answer: string
    }[]
  }
}

const convo: Convo = {
  ice: {
    says: [ 'Hi, I\'m Jamie.', 'What can I help you?' ],
  },
};

window.chatWindow = chatWindow;
