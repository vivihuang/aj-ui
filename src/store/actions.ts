export const addConversation = (conversation: UserInput | BotResponse): StateAction => {
  return {
    type: 'ADD_CONVERSATION',
    payload: conversation,
  };
};
