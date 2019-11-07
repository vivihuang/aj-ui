import { createElement } from '../utils/node';
import TextBubble from "./TextBubble";
import { isMessageInput } from "../utils/type-guards";

interface ConversationOptions {
  conversation: ConversationHistory;
}

const Conversation = (options: ConversationOptions) => {
  const { conversation } = options;
  const wrapper = createElement('div', { class: 'bubble-wrap' });
  conversation.forEach((message: MessageInput | MessageResponse) => {
    if (isMessageInput(message)) {
      wrapper.appendChild(TextBubble({
        text: message.message,
        isBot: false,
      }));
    } else {
      wrapper.appendChild(TextBubble({
        text: message.text || '',
        isBot: true,
      }))
    }
  });
  return wrapper;
};

export default Conversation;
