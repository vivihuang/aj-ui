import { h } from 'preact';

interface ImageBubbleProps {
  message: BotResponseImage;
}

const ImageBubble = ({ message }: ImageBubbleProps) => {
  const { image } = message;
  return (<img src={image} alt='Bot Message' />);
};

export default ImageBubble;
