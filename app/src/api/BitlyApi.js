class BitlyApi {

    static replaceWithShortUrls(text) {
        return new Promise((resolve) => {
            const words = text.replace(/\n/g, " ").split(" ");

            const httpFound = words.filter(word => word.indexOf("http://") === 0 ||  word.indexOf("https://") === 0); //TODO: Might need to modify this?

            Promise.all(httpFound.map(this.getShortenedUrl)).then(results => {
                results.forEach(data => {
                    text = text.replace(data.long_url, data.url);
                });
                resolve(text);
            });
        });
    }

    static getShortenedUrl(longUrl) {
        return new Promise((resolve) => {
            fetch(`https://api-ssl.bitly.com/v3/shorten?longUrl=${longUrl}&access_token=dfb4d4e2417e39c18f4488d8310e8d77515a9bdc`)
                .then(function (response) {
                    if (response.ok)
                        return response.json();
                })
                .then((responseJson) => {
                    resolve(responseJson.data);
                });
        });
    }
}

export default BitlyApi;
