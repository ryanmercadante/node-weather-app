const request = require('request')

const forecast = (latitude, longitude, cb) => {
  const url = `https://api.darksky.net/forecast/66434f25dd1f3981c5fb656d1916edf8/${latitude},${longitude}`

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      cb('Unable to connect to weather service.', undefined)
    } else if (body.err) {
      cb('Unable to find location', undefined)
    } else {
      const { temperature, precipProbability } = body.currently
      const { summary } = body.daily.data[0]
      cb(undefined, `${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast