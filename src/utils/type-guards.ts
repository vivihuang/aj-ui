export const isMessageInput =
  (message: MessageInput | MessageResponse): message is MessageInput => {
    return (message as MessageInput).sender !== undefined;
};
