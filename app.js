const yargs = require('yargs');
const geocode = require('./geolocation');
const weather = require('./weather');
const argv = yargs
.options({
    a: {
        describe:'address to fetch weather for',
        demand:true,
        alias:'address',
        string:true

    }
})
    .help()
    .alias('help','h')
    .argv

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
if(errorMessage){
    console.log(errorMessage);

}else{
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude,(error,weatherResult)=>{
        if(error){
            console.log(error);

        }else{
            console.log(`The temp is ${weatherResult.temperature}. Feels like ${weatherResult.apparentTemperature} and weather is ${weatherResult.summary}`);
        }
    });
}
});