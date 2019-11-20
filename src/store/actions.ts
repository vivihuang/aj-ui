import { useConversationState } from './index';
import { sendMessage } from '../utils/request';
import { ADD_CONVERSATION, SET_SENDER } from './constants';

export const handleMessage = (text: string) => {
  const [{ sender }, dispatch] = useConversationState();
  const userInput = {
    sender,
    text,
  };
  return sendMessage(userInput).then((response: BotResponse[]) => {
    if (!sender && response.length > 0 && response[0].recipient_id) {
      dispatch({
        type: SET_SENDER,
        payload: response[0].recipient_id,
      });
    }
    dispatch({
      type: ADD_CONVERSATION,
      payload: [
        userInput,
        ...response
      ]
    });
  }).catch((error: any) => {
    // TODO: Display an error message to the user
    console.error(error);
  });
};
