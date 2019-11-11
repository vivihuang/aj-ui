interface BotResponse {
  recipient_id: string;
  text?: string;
  image?: string;
}

interface UserInput {
  sender: string;
  text: string;
}

type Message = (BotResponse | UserInput);
