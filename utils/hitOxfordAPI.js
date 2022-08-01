const axios = require("axios");
require('dotenv').config();


const getDataFromOxfort = async (word) => {
    const endpoint = "entries";
    const source_lang = "en-us";
    const word_id = word;
    const url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${source_lang}/${word_id}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        app_id: process.env.app_id,
        app_key: process.env.app_key,
      },
    };
  
    const { data } = await axios.get(url, config);
    return data;
  };

  module.exports = getDataFromOxfort;
