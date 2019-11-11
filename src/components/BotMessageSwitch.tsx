import { getBotMessageType } from '../utils/type-guards';
import { BotResponseType } from '../constants';
import TextBubble from './TextBubble';
import ImageBubble from './ImageBubble';
import { h } from 'preact';

const BotMessageSwitch = ({ message }: { message: BotResponse }) => {
  const botMsgType = getBotMessageType(message);
  switch (botMsgType) {
    case BotResponseType.text:
      return (<TextBubble text={message.text || ''} />);
    case BotResponseType.image:
      return (<ImageBubble message={message}/>);
    default:
      return null;
  }
};

export default BotMessageSwitch;
