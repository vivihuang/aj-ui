import { getBotMessageType } from '../utils/type-guards';
import { BotResponseType } from '../constants';
import TextBubble from './TextBubble';
import ImageBubble from './ImageBubble';
import { h } from 'preact';

const BotMessageSwitch = ({ message }: { message: BotResponse }) => {
  const botMsgType = getBotMessageType(message);
  switch (botMsgType) {
    case BotResponseType.text:
      return (<TextBubble text={(message as BotResponseText).text} />);
    case BotResponseType.image:
      return (<ImageBubble message={message as BotResponseImage} />);
    default:
      return null;
  }
};

export default BotMessageSwitch;
