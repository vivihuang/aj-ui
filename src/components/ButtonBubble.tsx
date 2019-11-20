import { h } from 'preact';
import { handleMessage } from '../store/actions';

interface ButtonBubbleProps {
  buttons: BotResponseBase['buttons'];
}

const ButtonBubble = (props: ButtonBubbleProps) => {
  const { buttons } = props;

  const onClickButton = (event: Event, text: string) => {
    return handleMessage(text);
  };

  return <div className="button-group">
    {buttons.map((button, index) => {
      return <div className="button" key={index} onClick={(event) => onClickButton(event, button.title)}>
        {button.title}
      </div>
    })}
  </div>
};

export default ButtonBubble;
