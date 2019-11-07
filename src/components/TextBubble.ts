import { createElement } from "../utils/node";

interface TextBubbleOptions {
  text: string;
  isBot: boolean;
}

const TextBubble = ({ text, isBot }: TextBubbleOptions) => {
  const bubble = createElement('div', {
    class: ['bubble', 'text-bubble', 'say', ...isBot ? [] : ['reply']],
  });


  if (isBot) {
    const content = createElement('span', {
      class: 'bubble-content',
      text,
    });
    bubble.appendChild(content)
  } else {
    const content = createElement('span', {
      class: 'bubble-content'
    });
    const textWrapper = createElement('span', {
      class: ['bubble-button', 'bubble-pick'],
      text,
    });
    content.appendChild(textWrapper);
    bubble.appendChild(content);
  }
  return bubble;
};

export default TextBubble;
