const axios = require("axios");

// Solution=1)

let getMemes = async (req, res) => {
  try {
    let options = {
      method: "GET",
      url: "https://api.imgflip.com/get_memes",
    };
    let result = await axios(options);
    res.status(200).send({ status: true, msg: result.data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Solution=2)

let createMemes = async (req, res) => {
  try {
    let meme_id = req.query.template_id;
    let upperText = req.query.text1;
    let lowerText = req.query.text2;
    let userName = req.query.username;
    let password = req.query.password;

    if (meme_id && upperText && lowerText && userName && password) {
      let options = {
        method: "POST",
        url: `https://api.imgflip.com/caption_image?template_id=${meme_id}
        &text1=${upperText}&text2=${lowerText}&username=${userName}&password=${password}`,
      };
      let result = await axios(options);
      res.status(200).send({ status: true, msg: result.data });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.getMemes = getMemes;
module.exports.createMemes = createMemes;
