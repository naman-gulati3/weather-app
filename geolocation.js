const request = require('request');
var geocodeAddress = (address,callback)=>{
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCP3SS9I3CN7OrZ5Z1xeYjWA-dpbpDRRr4`,
        json:true
    },(error,response,body)=>{
        if(error){
            callback('unable to connect to google servers');
        }
        else if (body.status==='ZERO_RESULTS'){
            callback('Cant find the address');

        }else if(body.status==='OK'){
            callback(undefined,{
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            });
        }
  
    });
    
};
module.exports.geocodeAddress = geocodeAddress;