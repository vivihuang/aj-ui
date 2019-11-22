export const CONFIG_RASA: ChatbotConfig = {
  chat: {
    buttonText: 'Ask Rasa',
    headerText: 'Powered by Rasa',
    defaultGreetings: [
      'Hi, good day! How may I help you?',
    ],
    defaultPlaceholder: 'Type your question...',
    avatar: 'http://placekitten.com/g/120/120 ',
  },
  engine: {
    name: 'Rasa',
    host: '',
    endpoint: '/api/message/rasa',
  },
};

export const CONFIG_DF: ChatbotConfig = {
  chat: {
    buttonText: 'Ask DialogFlow',
    headerText: 'Powered by DialogFlow',
    defaultGreetings: [
      'Hello, How can I assist you today?'
    ],
    defaultPlaceholder: 'Type your question...',
    avatar: 'http://placekitten.com/g/120/120 ',
    placement: 'bottomLeft'
  },
  engine: {
    name: 'DialogFlow',
    host: '',
    endpoint: '/api/message/dialog-flow',
  },
};

// export default CONFIG_RASA;
