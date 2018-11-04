const axios=require('axios')
const yargs = require('yargs')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv
  var encodedAddress = encodeURIComponent(argv.address)
var geoCodeURL=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBioDY8YJnxLvPXfKmXs0PNxfEE7hNJapk`

axios.get(geoCodeURL).then((response)=>{

    if(response.data.status==='ZERO_RESULTS'){
        throw new Error('unable to find that address')
    }
var lat=response.data.results[0].geometry.location.lat
var lng=response.data.results[0].geometry.location.lng
var weatherURL=`https://api.darksky.net/forecast/a0165bd6b4934bd385b8c70db60f00cf/${lat},${lng}`

    console.log(response.data.results[0].formatted_address)
    return axios.get(weatherURL)
}).then((response)=>{
    var temperature=response.data.currently.temperature
    var apparentTemperature=response.data.currently.apparentTemperature
    console.log(`Its currently ${temperature}. It feels like ${apparentTemperature}`)
})
.catch(err=>{
    if(err.code==='ENOTFOUND'){
        console.log('Unable to connect to API sservers')
    }else{
        console.log(err.message)
    }
    
})