const request = require('request');
var getWeather = (lat,lng,callback) =>{
    request({
url:`https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`,
json: true
    },(error,response,body)=>{
        if(error){
            callback('Unable to access forecast api');
        }else if(response.statusCode===400){
            callback('unable to fetch weather');
        }else if(response.statusCode===200){
    callback(undefined,{
    temperature:body.currently.temperature,
apparentTemperature:body.currently.apparentTemperature,
summary:body.currently.summary});
    }
    });
}


module.exports.getWeather=getWeather;