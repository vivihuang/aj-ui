import {h} from 'preact';
import TextBubble from './TextBubble';
import ButtonBubble from './ButtonBubble';

interface TextWithButtonsProps {
  message: BotResponseText;
  handleMessage: (text: string) => void;
}


const TextWithButtons = (props: TextWithButtonsProps) => {
  const {message, handleMessage} = props
  return (<div>
    <TextBubble text={message.text}></TextBubble>
    <ButtonBubble buttons={message.buttons} handleMessage={handleMessage}></ButtonBubble>
  </div>)
}

export default TextWithButtons