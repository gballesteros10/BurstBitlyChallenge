import { BURST_APIKEY, BURST_APISECRET, BURST_CALLER_ID } from '../.env.js';

class BurstApi {
  static send(message, recipient) {

    let url = new URL("https://burst.transmitsms.com/api-wrapper/messages.single"),
      params = {
        apikey: BURST_APIKEY,
        apisecret: BURST_APISECRET,
        mobile: `63${recipient}`,
        message: message,
        caller_id: BURST_CALLER_ID,
      };

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return new Promise((resolve) => {
      fetch(url, { mode: 'no-cors' })
        .then(function (response) {
          resolve();
        })
    });
  }
}

export default BurstApi;
