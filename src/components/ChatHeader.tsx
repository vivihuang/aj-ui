import { h } from 'preact';

interface ChatHeaderProps {
  text: string;
  avatarSrc: string;
  closable?: boolean;
  close?: () => void;
}

const ChatHeader = (props: ChatHeaderProps) => {
  const { text, closable = true, close, avatarSrc } = props;
  return (<div className={'chat-header'}>
    <div>{text}</div>
    <img src={avatarSrc} className="avatar" alt='avatar' />
    {(closable && typeof close === 'function') && (
      <a href="javascript:" className="minimize-button" onClick={close}>{'x'}</a>)}
  </div>);
};

export default ChatHeader;

