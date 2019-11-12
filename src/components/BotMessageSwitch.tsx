import TextBubble from './TextBubble';
import ImageBubble from './ImageBubble';
import { h } from 'preact';

const BotMessageSwitch = ({ message }: { message: BotResponse }) => {
  if (message.text) {
    return (<TextBubble text={message.text} />);
  } else if (message.image) {
    return (<ImageBubble message={message} />);
  }

  return null;
};

export default BotMessageSwitch;
