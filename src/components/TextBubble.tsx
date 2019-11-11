import { h } from 'preact';

interface TextBubbleOptions {
  text: string;
  isBot: boolean;
}

const TextBubble = ({ text, isBot }: TextBubbleOptions) => {
  return (<div className={`bubble text-bubble say${isBot ? '' : ' reply'}`}>
    {
      isBot ? (<span className='bubble-content'>{text}</span>)
        : (<span className='bubble-content'>
        <span className={'bubble-button bubble-pick'}>
          {text}
        </span>
        </span>)
    }
    </div>);
};

export default TextBubble;
