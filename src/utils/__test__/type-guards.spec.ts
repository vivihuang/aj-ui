import { getBotMessageType, isUserInput } from '../type-guards';
import { BotResponseType } from '../../constants';

describe('# Message Type Guards', () => {
  it('should tell me a message is a user input message', () => {
    const userMessage = {
      sender: 'uuid-22222',
      text: 'Hello',
    };
    expect(isUserInput(userMessage)).toBeTruthy();
  });

  it('should not be user message when get bot message', () => {
    const botMessage: BotResponse = {
      text: 'Hello',
      recipient_id: 'uuid-22222',
    };
    expect(isUserInput(botMessage)).toBeFalsy();
  });

  it('should able to correctly assert bot response type', function () {
    const botTextMessage: BotResponse = {
      recipient_id: 'uuid-22222',
      text: 'Hello',
    };
    expect(getBotMessageType(botTextMessage)).toEqual(BotResponseType.text);
    const botImageMessage: BotResponse = {
      recipient_id: 'uuid-22222',
      image: 'http:',
    };
    expect(getBotMessageType(botImageMessage)).toEqual(BotResponseType.image);
    const unknownMessage: any = {
      recipient_id: 'uuid-2222',
    };
    expect(() => {
      getBotMessageType(unknownMessage);
    }).toThrow();
  });
});
