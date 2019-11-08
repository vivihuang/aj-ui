export const addConversation = (conversation: MessageInput | MessageResponse): StateAction => {
  return {
    type: 'ADD_CONVERSATION',
    payload: conversation,
  };
};
