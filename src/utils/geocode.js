const request = require('request')

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoicnlhbm1lcmMiLCJhIjoiY2p1MndmenlyMGgyMjN6bXkwc3ppc2VsZCJ9.q5aAZIODF7e7RLEA8jcD5A&limit=1`

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      cb('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0) {
      cb('Unable to find location. Try another search.', undefined)
    } else {
      cb(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode;