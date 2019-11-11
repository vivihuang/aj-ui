import config from '../config';

export const sendMessage = (message: string) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const uuid = 'i-am-bot';
    xhr.open('POST', `${config.engine.host}${config.engine.endpoint}`, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.getResponseHeader('content-type') === 'application/json') {
          const result = JSON.parse(xhr.responseText);
          console.log('result', result);
          return resolve(result);
        } else {
          return reject(xhr.responseText);
        }
      }
    };
    xhr.send(JSON.stringify({
      'sender': uuid,
      'message': message,
    }));
  });
};
