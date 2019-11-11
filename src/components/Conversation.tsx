import { h } from 'preact';
import BubbleContainer from './BubbleContainer';

interface ConversationOptions {
  conversation: Message[];
}

const Conversation = ({ conversation }: ConversationOptions) => {
  return (<div className='bubble-wrap'>
    {
      conversation && conversation.length > 0 && conversation.map((message, idx) => {
        return (<BubbleContainer message={message} key={idx} />);
      })
    }
    </div>);
};

export default Conversation;
