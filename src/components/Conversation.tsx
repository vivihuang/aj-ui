import {h} from 'preact';
import BubbleContainer from './BubbleContainer';
import {useEffect, useRef} from 'preact/hooks';

interface ConversationOptions {
  conversation: Message[];
  handleMessage: (text: string) => void;
}

const Conversation = ({conversation, handleMessage}: ConversationOptions) => {
  const wrapper = useRef<HTMLDivElement>();
  useEffect(() => {
    setTimeout(() => {
      if (wrapper.current) {
        wrapper.current.scrollTop = wrapper.current.scrollHeight;
      }
    }, 0);
  }, [conversation]);
  return (<div className='bubble-wrap' ref={wrapper}>
    {
      conversation && conversation.length > 0 && conversation.map((message, idx) => {
        return (<BubbleContainer message={message} key={idx} handleMessage={handleMessage}/>);
      })
    }
  </div>);
};

export default Conversation;
