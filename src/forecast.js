const request = require('request');

function getWeatherdata(address, callback) {
    const url = "http://api.weatherapi.com/v1/forecast.json?key=45a461482a5647a9a1e102529200510&q=" + address + "&days=1";
    
    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback("NO Internet Access!!!", undefined);
        } else if (response.body.error) {
            callback(response.body.error, undefined);
        } else {

            callback(undefined, response);

        }

    });
}

module.exports={getWeatherdata};