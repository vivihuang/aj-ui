import { Component, h } from 'preact';

interface InputState {
  value: string;
  disabled: boolean;
}

interface InputProps {
  sendMessage: (message: string) => any;
}

class Input extends Component<InputProps, InputState> {
  state = {
    value: '',
    disabled: false,
  };

  onInput = (event: any) => {
    this.setState({
      value: event.target.value,
    });
  };

  onKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'Enter' || event.keyCode === 13) {
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
      })
    }
  };

  render(_: any, { value, disabled }: InputState) {
    return (<div className='input-wrap'>
      <textarea
        value={value}
        disabled={disabled}
        onInput={this.onInput}
        onKeyUp={this.onKeyUp} />
    </div>)

  }
}

export default Input;

