interface ChatConfig {
  buttonText: string;
  headerText: string;
  defaultGreetings: string[];
  avatar: string;
}

interface EngineConfig {
  host: string;
  endpoint: string;
}

interface ChatbotConfig {
  chat: ChatConfig;
  engine: EngineConfig;
}
