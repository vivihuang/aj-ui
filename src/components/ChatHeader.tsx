import { FunctionalComponent, h } from "preact";

interface ChatHeaderProps {
  text: string;
  avatarSrc: string;
  closable?: boolean;
  close?: () => void;
}

// const ChatHeader = (options: ChatHeaderOptions) => {
//   const { text, closable = true, close, avatarSrc } = options;
//   const header = createElement('div', { class: 'chat-header' });
//   const headline = createElement('div', {
//     text,
//   });
//   const avatar = createElement('img', {
//     class: 'avatar',
//   });
//   avatar.src = avatarSrc;
//   header.appendChild(headline);
//   header.appendChild(avatar);
//   if (closable && typeof close === 'function') {
//     const closeButton = createElement('a', { text: 'x', class: 'minimize-button' });
//     closeButton.addEventListener('click', close);
//     header.appendChild(closeButton);
//   }
//   return header;
// };

const ChatHeader: FunctionalComponent = (props: ChatHeaderProps) => {
  const { text, closable = true, close, avatarSrc } = props;
  return (<div className={'chat-header'}>
    <div>{text}</div>
    <img src={avatarSrc} className="avatar"/>
    {(closable && typeof close === 'function') && (
      <a href="javascript:" className="minimize-button" onClick={close}>{'x'}</a>)}
  </div>);
};

export default ChatHeader;

