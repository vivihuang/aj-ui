import { h } from 'preact';
import { isUserInput } from '../utils/type-guards';
import TextBubble from './TextBubble';
import BotMessageSwitch from './BotMessageSwitch';

interface BubbleProps {
  message: Message;
}

const BubbleContainer = (props: BubbleProps) => {
  const { message } = props;
  const isBot = !isUserInput(message);
  return (<div className={`bubble text-bubble say${isBot ? '' : ' reply'}`}>
      <span className='bubble-content'>
      {
        isBot ? (<BotMessageSwitch message={message as BotResponse} />)
          : (<span className='bubble-button bubble-pick'>
            <TextBubble text={message.text || ''} />
          </span>)
      }
        </span>
  </div>);
};

export default BubbleContainer;
