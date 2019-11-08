interface State {
  conversation: ConversationHistory;
}

interface StateAction<P extends StateActionPayload = StateActionPayload,
  T extends keyof P = keyof StateActionPayload> {
  type: T;
  payload: P[T];
}

interface StateActionPayload {
  ADD_CONVERSATION: MessageInput | MessageResponse;
}
