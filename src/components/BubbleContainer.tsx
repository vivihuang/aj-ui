import { h } from 'preact';
import TextBubble from './TextBubble';
import BotMessageSwitch from './BotMessageSwitch';

interface BubbleProps {
  message: Message;
}

const BubbleContainer = (props: BubbleProps) => {
  const { message } = props;
  if ('recipient_id' in message) {
    return (<div className="bubble text-bubble say">
      <span className='bubble-content'>
        <BotMessageSwitch message={message} />
      </span>
    </div>);
  } else {
    return (<div className="bubble text-bubble say reply">
      <span className='bubble-content'>
        <span className='bubble-button bubble-pick'>
          <TextBubble text={message.text || ''} />
        </span>
      </span>
    </div>);
  }
};

export default BubbleContainer;
