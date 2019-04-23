"use strict"

const validateRequest = (request, response, next) => {
  if(["POST", "PUT"].indexOf(request.method) === -1 || request.is("json") === "json"){
    return next()
  } else {
    return response.status(400).json({"message": "Bad Request. Header issue"})
  }
}

const unknownMethodHandler = (request, response) => {
  return response.status(404).json({ "message": "Endpoint not found" })
}

module.exports = {
  validateRequest,
  unknownMethodHandler
}