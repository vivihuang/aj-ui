import config from '../config';

export const sendMessage = (message: UserInput): Promise<BotResponse[]> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${config.engine.host}${config.engine.endpoint}`, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.getResponseHeader('content-type') === 'application/json') {
          const result = JSON.parse(xhr.responseText) as BotResponse[];
          return resolve(result);
        } else {
          return reject(xhr.responseText);
        }
      }
    };
    const {sender, text} = message;
    const data = sender ? {
      sender,
      message: text,
    } : {
      message: text,
    };
    xhr.send(JSON.stringify(data));
  });
};
