const CONFIG: ChatbotConfig = {
  chat: {
    buttonText: 'Ask Jamie',
    headerText: 'Ask Jamie @ onePA',
    defaultGreetings: ['Hi, good day! How may I help you?'],
    defaultPlaceholder: 'Type your question...',
    avatar: 'http://placekitten.com/g/120/120 ',
  },
  engine: {
    host: '',
    endpoint: '/api/message',
  },
};

export default CONFIG;
