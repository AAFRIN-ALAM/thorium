const http = require("https");

const app_id = "bfaa1c11";
const app_key = "c66c6386698bcd9b6f5c90e32f119914";
const wordId = "ace";
const fields = "pronunciations";
const strictMatch = "false";


let fetchData = async function (req, res) {
  try {
    const option = {
      host: 'od-api.oxforddictionaries.com',
      port: '443',
      path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
      method: "GET",
      headers: {
        'app_id': app_id,
        'app_key': app_key
      },
      url: '	https://od-api.oxforddictionaries.com/api/v2',
    };

    http.get(option, (response) => {
      let body = '';
      response.on('data', (data) => {
        body =body + data;
      });
      response.on('end', () => {
        let parsed = JSON.stringify(body);
        // console.log(parsed);
      });
    });


  }
  catch (error) {
    console.log(error)
    return res.status(500).send({ status: false, message: error.message })
  }
}


module.exports = {fetchData};
