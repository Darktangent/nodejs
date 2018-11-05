const request=require('request')
var geoCodeAddress=(address)=>{

return new Promise((resolve,reject)=>{

    var encodedAddress = encodeURIComponent(address)

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBioDY8YJnxLvPXfKmXs0PNxfEE7hNJapk`,
      json: true
    }, (error, response, body) => {
      // console.log(JSON.stringify(body, undefined, 2))
  
      if (error) {
        reject('Unable to connect to Google servers')
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address')
      } else if (body.status === 'OK') {
        resolve({
          address:body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
  
        })
        // console.log(`Address: ${body.results[0].formatted_address}`)
        // console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
        // console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
  
      }
  
    })
})
}

geoCodeAddress('19146').then((location)=>{
console.log(JSON.stringify(location,undefined,2))
}).catch(err=>console.log(err))