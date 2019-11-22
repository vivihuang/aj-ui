import { h } from 'preact';
import { handleMessage } from '../store/actions';
import { AppConfig } from '../store';

interface ButtonBubbleProps {
  buttons: BotResponseBase['buttons'];
}

const ButtonBubble = (props: ButtonBubbleProps) => {
  const { buttons } = props;

  const onClickButton = (event: Event, text: string, config: ChatbotConfig) => {
    return handleMessage(text, config);
  };

  return (
    <AppConfig.Consumer>
      {
        (config: ChatbotConfig) => (
          <div className="button-group">
            {buttons.map((button, index) => {
              return (<div className="button" key={index} onClick={(event) => onClickButton(event, button.payload, config)}>
                {button.title}
              </div>)
            })}
          </div>
        )
      }
    </AppConfig.Consumer>
  )
};

export default ButtonBubble;
