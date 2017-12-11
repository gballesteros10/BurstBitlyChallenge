class BurstApi {
  static send(message, recipient) {

    let url = new URL("https://burst.transmitsms.com/api-wrapper/messages.single"),
      params = {
        apikey: 'cb5fd450acf95e69a47a8352c84288ca',
        apisecret: 'burstsmsTEST@',
        mobile: `63${recipient}`,
        message: message,
        caller_id: 'test',
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
