import { h, createContext } from 'preact';
import { useContext, useReducer } from 'preact/hooks';
import { conversationReducer } from './reducer';

const initialConversationState: Conversation = {
  sender: '',
  history: [],
};

// TODO: remove any: [Conversation, (action: Action<any>) => void]
export const ConversationContext = createContext<any>(null);

export const ConversationProvider = ({ children }: { children: any }) => {
  return (
    <ConversationContext.Provider
      value={useReducer<Conversation, Action<any>>(conversationReducer, initialConversationState)}>
      {children}
    </ConversationContext.Provider>)
};

export const useConversationState = () => {
  return useContext(ConversationContext);
};
