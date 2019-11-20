import {h} from 'preact';

interface ButtonBubbleProps {
  buttons: BotResponseBase['buttons'];
  handleMessage: (text: string) => void;
}

const ButtonBubble = (props: ButtonBubbleProps) => {
  const {buttons, handleMessage} = props;

  const onClickButton = (event: Event, text: string) => {
    handleMessage(text)
  }

  return <div className="button-group">
    {buttons.map((button, index) => {
      return <div className="button" key={index} onClick={(event) => onClickButton(event, button.title)}>
        {button.title}
      </div>
    })}
  </div>
}

export default ButtonBubble
