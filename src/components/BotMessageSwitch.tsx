import TextBubble from './TextBubble';
import ImageBubble from './ImageBubble';
import { h } from 'preact';

const BotMessageSwitch = ({ message }: { message: BotResponse }) => {
  if ('text' in message) {
    return (<TextBubble text={message.text || ''} />);
  } else if ('image' in message) {
    return (<ImageBubble message={message} />);
  }
  return null;
};

export default BotMessageSwitch;
