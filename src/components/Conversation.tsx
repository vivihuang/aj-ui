import TextBubble from './TextBubble';
import { isMessageInput } from '../utils/type-guards';
import { h } from 'preact';

interface ConversationOptions {
  conversation: ConversationHistory;
}

const Conversation = ({ conversation }: ConversationOptions) => {
  return (<div className='bubble-wrap'>
    {
      conversation && conversation.length > 0 && conversation.map((message) => {
        return isMessageInput(message)
          ? <TextBubble text={message.message} isBot={false}/>
          : <TextBubble text={message.text || ''} isBot={true}/>
      })
    }
    </div>);
};

export default Conversation;
