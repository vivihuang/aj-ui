interface MessageResponse {
  recipient_id: string;
  text?: string;
  image?: string;
}

interface MessageInput {
  sender: string;
  message: string;
}

type ConversationHistory = (MessageResponse | MessageInput)[];
