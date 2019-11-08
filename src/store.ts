import { useReducer } from 'preact/hooks';

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


const reducer = (state: State, action: StateAction) => {
  switch (action) {
    default:
      throw new Error('Unexpected action');
  }
};

const [state, dispatch] = useReducer(reducer, initState);

export {
  state,
  dispatch,
};
