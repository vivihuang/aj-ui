import { Component, h } from 'preact';
import CONFIG from '../config';

interface InputState {
  value: string;
  disabled: boolean;
}

interface InputProps {
  sendMessage: (message: string) => Promise<any>;
}

class Input extends Component<InputProps, InputState> {
  state = {
    value: '',
    disabled: false,
  };

  onInput = (event: any) => {
    if (event.code === 'Enter' || event.keyCode === 13) return;
    this.setState({
      value: event.target.value,
    });
  };

  onKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'Enter' || event.keyCode === 13) {
      event.preventDefault();
      this.setState({
        disabled: true,
      });
      this.props.sendMessage(this.state.value).then(() => {
        this.setState({
          disabled: false,
          value: '',
        });
      }).catch(() => {
        this.setState({
          disabled: false,
        });
      });
    }
  };

  render(_: any, { value, disabled }: InputState) {
    return (<div className='input-wrap'>
      <textarea
        value={value}
        disabled={disabled}
        placeholder={CONFIG.chat.defaultPlaceholder}
        onInput={this.onInput}
        onKeyUp={this.onKeyUp} />
    </div>);

  }
}

export default Input;

