import {h} from 'preact';
import TextBubble from './TextBubble';
import ButtonBubble from './ButtonBubble';

interface TextWithButtonsProps {
  message: BotResponseText;
}


const TextWithButtons = (props: TextWithButtonsProps) => {
  const {message} = props
  return (<div>
    <TextBubble text={message.text}></TextBubble>
    <ButtonBubble buttons={message.buttons}></ButtonBubble>
  </div>)
}

export default TextWithButtons