import { ADD_CONVERSATION, INIT_CONVERSATION, SET_SENDER } from './constants';

export const conversationReducer = (state: Conversation, action: Action<any>) => {
  switch (action.type) {
    case INIT_CONVERSATION:
      return {
        ...state,
        history: action.payload,
      };
    case ADD_CONVERSATION:
      return {
        ...state,
        history: [
          ...state.history,
          ...action.payload,
        ],
      };
    case SET_SENDER:
      return {
        ...state,
        sender: action.payload,
      };
    default:
      return state;
  }
};
