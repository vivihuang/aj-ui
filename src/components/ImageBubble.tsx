import { h } from 'preact';

interface ImageBubbleProps {
  message: BotResponse;
}

const ImageBubble = ({ message }: ImageBubbleProps) => {
  const { image } = message;
  return (<img src={image} alt='Bot Message' />);
};

export default ImageBubble;
