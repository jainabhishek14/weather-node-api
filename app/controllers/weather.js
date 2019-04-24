"use strict"

const client = require("apixu")

const weatherConfig = client.config

weatherConfig.apikey = process.env.APIXUKEY
const apixu = new client.Apixu(weatherConfig)

const fetchWeatherInformation = location => apixu.current(location).then(current => current.current). catch(error => console.log(error))

const fetchWeathers = locations => {
  return new Promise(resolve => {
    let weathers = {}
    locations.forEach(async (location, index, locations) => {
      const weather = await fetchWeatherInformation(location)
      weathers[location] = weather || "No location found"
      if(index === locations.length -1){
        resolve(weathers)
      }
    })
  })
}

exports.getWeather = async (request, response) => {
  if(request.body.hasOwnProperty("locations") && Array.isArray(request.body.locations)){
    const locations = request.body.locations.map(location => location.trim())
    const weather = await fetchWeathers(locations).then(data => data).catch(error => console.log(error))
    response.status(200).json({ "data":  weather})
  } else {
    response.status(400).json({"message": "Invalid or missing locations"})
  }
  
}