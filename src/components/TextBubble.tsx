import { h } from 'preact';

interface TextBubbleOptions {
  text: string;
}

const TextBubble = ({ text }: TextBubbleOptions) => {
  return (<span>{text}</span>);
};

export default TextBubble;
