const axios = require("axios");

// Solution=1)

let getWeather = async (req, res) => {
  try {
    let cities = req.query.q;
    let key = req.query.appid;
    if (cities && key) {
      let options = {
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${key}`,
      };
      let result = await axios(options);
      res.status(200).send({ status: true, msg: result.data });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Solution=2)

let tempOfLondon = async (req, res) => {
  try {
    let city = "London";
    let key = req.query.appid;
    if (key) {
      let options = {
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
      };
      let result = await axios(options);
      let message = result.data.main.temp;
      res.status(200).send({ status: true, msg: message });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Solution=3)

let tempOfCities = async (req, res)=> {
  try {
    let cities = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let newCityobject = [];
    for (let i = 0; i < cities.length; i++) {
      let CityObject = { city: cities[i] };
      // console.log(CityObject)
      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f53203c8b92df8392ebd7dd64bf9b187`,
      };
      let result = await axios(options);
      CityObject.temp = result.data.main.temp;
      // console.log(CityObject.temp)
      newCityobject.push(CityObject);
      // console.log(newCityobject)
    }
    let SortedCities = newCityobject.sort(function (a, b) {
      return a.temp - b.temp;
    });
    res.status(200).send({ status: true, Msg: SortedCities });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.getWeather = getWeather;
module.exports.tempOfLondon = tempOfLondon;
module.exports.tempOfCities = tempOfCities;
