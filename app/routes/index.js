"use strict"

const weather = require("../controllers/weather")
const handler = require("../middlewares/handler")

module.exports = app => {
  app.all("*", handler.validateRequest)

  app.route("/weather")
    .post(weather.getWeather)

  app.all("*", handler.unknownMethodHandler)
}
