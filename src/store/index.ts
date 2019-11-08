import { useReducer } from 'preact/hooks';
import { reducer } from './reducer';

const initState: State = {
  conversation: [
    {
      sender: 'test1',
      message: 'Hello',
    },
    {
      recipient_id: 'test1',
      text: 'Hi, I am Jamie',
    },
  ],
};

const [state, dispatch] = useReducer(reducer, initState);

export {
  state,
  dispatch,
};
