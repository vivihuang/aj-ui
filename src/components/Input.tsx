import { Component, h } from 'preact';
import CONFIG from '../config';
import { PropRef, useRef } from 'preact/hooks';

interface InputState {
  disabled: boolean;
}

interface InputProps {
  sendMessage: (message: string) => Promise<any>;
}

class Input extends Component<InputProps, InputState> {
  textarea: PropRef<HTMLTextAreaElement>;

  constructor(props: InputProps) {
    super(props);
    this.textarea = useRef();
  }

  state = {
    disabled: false,
  };

  onKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'Enter' || event.keyCode === 13) {
      event.preventDefault();
      this.setState({
        disabled: true,
      });
      const value = (event.target as HTMLInputElement).value;
      this.props.sendMessage(value).then(() => {
        this.setState({
          disabled: false,
        });
        if (this.textarea.current) {
          this.textarea.current.value = '';
        }
      }).catch(() => {
        this.setState({
          disabled: false,
        });
      });
    }
  };

  render(_: any, { disabled }: InputState) {
    // this.textarea = useRef();
    return (<div className='input-wrap'>
      <textarea
        ref={this.textarea}
        disabled={disabled}
        placeholder={CONFIG.chat.defaultPlaceholder}
        onKeyUp={this.onKeyUp} />
    </div>);
  }
}

export default Input;

