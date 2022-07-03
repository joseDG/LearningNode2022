const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoiam9zaGluOTIiLCJhIjoiY2t0MDU3Z2k5MDF5YjJvcGtndjFlb2YwZSJ9.SgEKicqmcuDZVuqdrXN06w&limit=1'

// request({url: geocodeURL, json: true }, (error, response) => {
//   if(error){
//     console.log('Unable to connect to location services!')
//   }else if (response.body.features.length === 0){
//     console.log('Unable to find location. Try another search.')
//   }else{
//     const latitude = response.body.features[0].center[0]
//     const longitude = response.body.features[0].center[1]
//     console.log(latitude, longitude)
//   }

// })

geocode('Boston', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})