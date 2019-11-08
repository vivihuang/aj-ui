export const reducer = (state: State, action: StateAction) => {
  switch (action.type) {
    case 'ADD_CONVERSATION': {
      const newConversation = [...state.conversation, action.payload];
      return Object.assign({}, state, { conversation: newConversation });
    }
    default:
      throw new Error('Unexpected action');
  }
};
