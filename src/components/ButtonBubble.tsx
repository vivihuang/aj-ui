import {h} from 'preact';

interface ButtonBubbleProps {
  buttons: BotResponseBase['buttons'];
}

const ButtonBubble = (props: ButtonBubbleProps) => {
  const {buttons} = props;
  return <div className="button-group">
    {buttons.map((button, index) => {
      return <div className="button" key={index}>
        {button.title}
      </div>
    })}
  </div>
}

export default ButtonBubble
