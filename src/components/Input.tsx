import { Component, h } from 'preact';

interface InputState {
  value: string;
}

class Input extends Component<any, InputState> {
  state = { value: 'initial value' };

  onInput = (event: any) => {
    this.setState({
      value: event.target.value,
    });
  };

  onKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'Enter' || event.keyCode === 13) {
      this.setState({
        value: '',
      })
    }
  };

  render(_: any, { value }: InputState) {
    return (<div className='input-wrap'>
      <textarea value={value} onInput={this.onInput} onKeyUp={this.onKeyUp} />
    </div>)

  }
}

export default Input;

