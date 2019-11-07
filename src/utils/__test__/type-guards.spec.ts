import { isMessageInput } from "../type-guards";

describe('# Message Type Guards', () => {
  it('should tell me a message is a user input message', () => {
    const userMessage = {
      sender: 'uuid-22222',
      message: 'Hello',
    };
    expect(isMessageInput(userMessage)).toBeTruthy();
  });
  it('should not be user message when get bot message', () => {
    const botMessage: MessageResponse = {
      text: 'Hello',
      recipient_id: 'uuid-22222',
    };
    expect(isMessageInput(botMessage)).toBeFalsy();
  });
});
