interface ChatConfig {
  buttonText: string;
  headerText: string;
  defaultGreetings: string[];
  defaultPlaceholder: string;
  avatar: string;
  placement?: 'bottomRight' | 'bottomLeft';
}

interface EngineConfig {
  name: 'Rasa' | 'DialogFlow';
  host: string;
  endpoint: string;
}

interface ChatbotConfig {
  chat: ChatConfig;
  engine: EngineConfig;
}
