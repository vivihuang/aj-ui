import { h } from 'preact';

interface TextBubbleOptions {
  text: string;
  isBot: boolean;
}

// const TextBubble = ({ text, isBot }: TextBubbleOptions) => {
//   const bubble = createElement('div', {
//     class: ['bubble', 'text-bubble', 'say', ...isBot ? [] : ['reply']],
//   });
//
//
//   if (isBot) {
//     const content = createElement('span', {
//       class: 'bubble-content',
//       text,
//     });
//     bubble.appendChild(content)
//   } else {
//     const content = createElement('span', {
//       class: 'bubble-content'
//     });
//     const textWrapper = createElement('span', {
//       class: ['bubble-button', 'bubble-pick'],
//       text,
//     });
//     content.appendChild(textWrapper);
//     bubble.appendChild(content);
//   }
//   return bubble;
// };

const TextBubble = ({ text, isBot }: TextBubbleOptions) => {
  return (<div className='bubble text-bubble say'>
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
