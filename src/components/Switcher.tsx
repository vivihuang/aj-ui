import { h } from 'preact';

interface SwitcherOptions {
  text: string;
  onClick: () => void;
}

const Switcher = (props: SwitcherOptions) => {
  const { text, onClick } = props;
  return (<button className='chat-button' onClick={onClick}>{text}</button>);
};

export default Switcher;
