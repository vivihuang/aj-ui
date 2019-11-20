import { Component, h } from 'preact';
import CONFIG from '../config';
import { PropRef, useRef } from 'preact/hooks';
import { handleMessage } from '../store/actions';

interface InputState {
  disabled: boolean;
}

class Input extends Component<any, InputState> {
  textarea: PropRef<HTMLTextAreaElement>;

  constructor(props: any) {
    super(props);
    this.textarea = useRef();
  }

  state = {
    disabled: false,
  };

  onKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Enter' || event.keyCode === 13) {
      event.preventDefault();
    }
  };

  onKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'Enter' || event.keyCode === 13) {
      const value = (event.target as HTMLInputElement).value.trim();
      if(!value) {
        if (this.textarea.current) this.textarea.current.value = '';
        return
      }
      this.setState({
        disabled: true,
      });

      handleMessage(value).then(() => {
        this.setState({
          disabled: false,
        });
        if (this.textarea.current) {
          this.textarea.current.value = '';
          setTimeout(() => {
            if (this.textarea.current) {
              this.textarea.current.focus();
            }
          }, 0);
        }
      }).catch(() => {
        this.setState({
          disabled: false,
        });
      });
    }
  };

  render(_: any, { disabled }: InputState) {
    if (this.textarea.current) {
      this.textarea.current.focus();
    }
    return (<div className='input-wrap'>
      <textarea
        ref={this.textarea}
        disabled={disabled}
        placeholder={CONFIG.chat.defaultPlaceholder}
        onKeyUp={this.onKeyUp}
        onKeyDown={this.onKeyDown} />
    </div>);
  }
}

export default Input;
