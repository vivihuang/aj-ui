interface BotResponseBase {
  recipient_id: string;
  buttons: {
    title: string;
    payload: string;
  }[];
}

interface BotResponseText extends BotResponseBase{
  text: string;
  image: null;
}

interface BotResponseImage extends BotResponseBase {
  text: null;
  image: string;
}

type BotResponse = BotResponseText | BotResponseImage

interface UserInput {
  sender: string;
  text: string;
}

type Message = (BotResponse | UserInput);
