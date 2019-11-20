import { h } from 'preact';
import TextBubble from './TextBubble';
import ButtonBubble from './ButtonBubble';

interface TextWithButtonsProps {
  message: BotResponseText;
}

const TextWithButtons = (props: TextWithButtonsProps) => {
  const { message } = props;
  return (<div>
    <TextBubble text={message.text}/>
    <ButtonBubble buttons={message.buttons}/>
  </div>)
};

export default TextWithButtons;
