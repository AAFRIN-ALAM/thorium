let axios = require("axios");

// solution=1)

let getStates = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// solution=2)

let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// solution=3)

let getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// solution=4)

let getOtp = async function (req, res) {
  try {
    let blahhh = req.body;

    console.log(`body is : ${blahhh} `);
    var options = {
      method: "post",
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// solution=5)

let getDistrictsBySession = async  (req, res) =>{
  try {
    let id = req.query.district_id;
    let date = req.query.date;
    console.log(`query params are: ${id} ${date}`);
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getDistrictsBySession = getDistrictsBySession;
