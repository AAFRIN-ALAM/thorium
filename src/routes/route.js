const express = require("express");
const router = express.Router();
const CowinController = require("../controllers/cowinController");
const weatherController = require("../controllers/weatherController");
const memeController = require("../controllers/memeController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

// 3.)

router.get("/getMemes", memeController.getMemes);
router.post("/createMemes", memeController.createMemes);

// 2.)

router.get("/getWeather", weatherController.getWeather);
router.get("/tempOfLondon", weatherController.tempOfLondon);
router.get("/tempOfCities", weatherController.tempOfCities);

// 1.)
router.get("/cowin/states", CowinController.getStates);
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts);
router.get("/cowin/getByPin", CowinController.getByPin);

router.post("/cowin/getOtp", CowinController.getOtp);
router.get("/cowin/getByDistrictId", CowinController.getDistrictsBySession);

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

module.exports = router;
