import {h} from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { useConversationState } from '../store';
import BubbleContainer from './BubbleContainer';

const Conversation = () => {
  const [{ history: conversation }] = useConversationState();
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
      conversation && conversation.length > 0 && conversation.map((message: Message, idx: number) => {
        return (<BubbleContainer message={message} key={idx} />);
      })
    }
  </div>);
};

export default Conversation;
