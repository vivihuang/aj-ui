import { h } from 'preact';

interface TextBubbleOptions {
  text: string;
}

const TextBubble = ({ text }: TextBubbleOptions) => {
  const richText = text.replace(/(https?:\/\/[^\s]*\b)/g, (matches, url) => {
    return `<a href="${url}" ref="noopener noreferrer" target="_blank">${url}</a>`;
  });
  return (<div dangerouslySetInnerHTML={{ __html: richText }} />);
};

export default TextBubble;
