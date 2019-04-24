# Weather Utility

This service fetches the weather information for given list of citiies or zipcode.

    Technology Stack: Node, Express JS, APIXU Weather API, Chai,  Mocha
    Owner: Abhishek Jain

# Endpoints 
Following are the end points of this API

1. [Get Weather](#get-weather)

##  Get Weather
    EndPoint: <domain-name>/weather
    Description: It fetches the weather information for all the given locations provided
 
### Request
    Request Type: POST
    Headers:
        Content Type: "application/json"
    Input Parameters:
        locations: [
            String / Number (Required)
        ](Required)

### Basic Usage:

    var data = {
        locations: ["Paris", "Mumbai", "10001", 110059, "Hyderabad", "Sofiya", "New Delhi"]
    }

    $.ajax({
        url: <domain-name>/weather,
        type: "POST",
        data: data,
        Content-Type:'application/json',
        success: function(response){},
        error: function(response){}
    });


### Response

#####  HTTP Status (200):
you will receive a json object which contains message "Sucessful"

        Code: 200
        Result: 
            {
                "data": {
                    "10001": {
                        "last_updated_epoch": 1556023512,
                        "last_updated": "2019-04-23 08:45",
                        "temp_c": 13.9,
                        "temp_f": 57,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.apixu.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 0,
                        "wind_kph": 0,
                        "wind_degree": 326,
                        "wind_dir": "NNW",
                        "pressure_mb": 1017,
                        "pressure_in": 30.5,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "humidity": 72,
                        "cloud": 0,
                        "feelslike_c": 13.9,
                        "feelslike_f": 57,
                        "vis_km": 16,
                        "vis_miles": 9,
                        "uv": 4,
                        "gust_mph": 7.2,
                        "gust_kph": 11.5
                    },
                    "110059": "No location found",
                    "Paris": {
                        "last_updated_epoch": 1556023515,
                        "last_updated": "2019-04-23 14:45",
                        "temp_c": 19,
                        "temp_f": 66.2,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.apixu.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 0,
                        "wind_kph": 0,
                        "wind_degree": 297,
                        "wind_dir": "WNW",
                        "pressure_mb": 995,
                        "pressure_in": 29.8,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "humidity": 46,
                        "cloud": 0,
                        "feelslike_c": 19,
                        "feelslike_f": 66.2,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "uv": 5,
                        "gust_mph": 4.9,
                        "gust_kph": 7.9
                    },
                    "Mumbai": {
                        "last_updated_epoch": 1556023515,
                        "last_updated": "2019-04-23 18:15",
                        "temp_c": 31,
                        "temp_f": 87.8,
                        "is_day": 1,
                        "condition": {
                            "text": "Mist",
                            "icon": "//cdn.apixu.com/weather/64x64/day/143.png",
                            "code": 1030
                        },
                        "wind_mph": 12.5,
                        "wind_kph": 20.2,
                        "wind_degree": 280,
                        "wind_dir": "W",
                        "pressure_mb": 1007,
                        "pressure_in": 30.2,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "humidity": 66,
                        "cloud": 0,
                        "feelslike_c": 36.4,
                        "feelslike_f": 97.6,
                        "vis_km": 6,
                        "vis_miles": 3,
                        "uv": 7,
                        "gust_mph": 25.1,
                        "gust_kph": 40.3
                    },
                    "Hyderabad": {
                        "last_updated_epoch": 1556024437,
                        "last_updated": "2019-04-23 18:30",
                        "temp_c": 36,
                        "temp_f": 96.8,
                        "is_day": 0,
                        "condition": {
                            "text": "Partly cloudy",
                            "icon": "//cdn.apixu.com/weather/64x64/night/116.png",
                            "code": 1003
                        },
                        "wind_mph": 5.6,
                        "wind_kph": 9,
                        "wind_degree": 110,
                        "wind_dir": "ESE",
                        "pressure_mb": 1010,
                        "pressure_in": 30.3,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "humidity": 27,
                        "cloud": 50,
                        "feelslike_c": 36.1,
                        "feelslike_f": 96.9,
                        "vis_km": 6,
                        "vis_miles": 3,
                        "uv": 0,
                        "gust_mph": 7.8,
                        "gust_kph": 12.6
                    },
                    "Sofiya": {
                        "last_updated_epoch": 1556024437,
                        "last_updated": "2019-04-23 16:00",
                        "temp_c": 10,
                        "temp_f": 50,
                        "is_day": 1,
                        "condition": {
                            "text": "Partly cloudy",
                            "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                            "code": 1003
                        },
                        "wind_mph": 16.1,
                        "wind_kph": 25.9,
                        "wind_degree": 130,
                        "wind_dir": "SE",
                        "pressure_mb": 1023,
                        "pressure_in": 30.7,
                        "precip_mm": 1.4,
                        "precip_in": 0.06,
                        "humidity": 66,
                        "cloud": 50,
                        "feelslike_c": 6.9,
                        "feelslike_f": 44.4,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "uv": 4,
                        "gust_mph": 17.2,
                        "gust_kph": 27.7
                    },
                    "New Delhi": {
                        "last_updated_epoch": 1556023515,
                        "last_updated": "2019-04-23 18:15",
                        "temp_c": 41,
                        "temp_f": 105.8,
                        "is_day": 1,
                        "condition": {
                            "text": "Mist",
                            "icon": "//cdn.apixu.com/weather/64x64/day/143.png",
                            "code": 1030
                        },
                        "wind_mph": 9.4,
                        "wind_kph": 15.1,
                        "wind_degree": 300,
                        "wind_dir": "WNW",
                        "pressure_mb": 1006,
                        "pressure_in": 30.2,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "humidity": 21,
                        "cloud": 25,
                        "feelslike_c": 41.8,
                        "feelslike_f": 107.3,
                        "vis_km": 5,
                        "vis_miles": 3,
                        "uv": 9,
                        "gust_mph": 11.2,
                        "gust_kph": 18
                    }
                }
            }
        Headers:
            Content Type: application/json
# Dependency on Other Service
1. `Apixu Weather API` Service for weather information


# Deployment
## Prerequisites
- node `^10.0`
- npm `^6.2.0`

## Dependent Environment Variables
- PORT
- APIXUAPI

## Installation
    
1. Run: `npm install`
2. Run: `cp .env.dist .env`
3. Run: `npm start`