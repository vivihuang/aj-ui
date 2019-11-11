import { BotResponseType } from '../constants';

export const isUserInput =
  (message: UserInput | BotResponse): message is UserInput => {
    return (message as UserInput).sender !== undefined;
  };

export const getBotMessageType = (message: BotResponse): BotResponseType => {
  if (message.text) return BotResponseType.text;
  else if (message.image) return BotResponseType.image;
  else throw new TypeError('unknown bot response');
};
