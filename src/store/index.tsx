import { h, createContext, VNode } from 'preact';
import { useContext, useReducer } from 'preact/hooks';
import { conversationReducer } from './reducer';
import { CONFIG_RASA } from '../config';

const initialConversationState: Conversation = {
  sender: '',
  history: [],
};

type ConversationContextProps = [
  Conversation,
  ({ type }: Action) => void
]

export const ConversationContext = createContext<ConversationContextProps>({} as ConversationContextProps);

export const ConversationProvider = ({ children }: { children: VNode }) => {
  const value = useReducer(conversationReducer, initialConversationState);

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversationState = () => {
  return useContext(ConversationContext);
};

export const AppConfig = createContext<ChatbotConfig>(CONFIG_RASA);
