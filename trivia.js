const express = require('express');
const axios = require ('axios');
const coin = express.Router();
const { random } = require('lodash');


coin.get('/Trivia',(req,res)=>{
  var axios = require("axios").default;
  var options = {
    method: 'GET',
    url: 'https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia',
    headers: {
      'x-rapidapi-host': 'trivia-by-api-ninjas.p.rapidapi.com',
      'x-rapidapi-key': '13a15a8372mshd67674834755950p1fe9a8jsna735bdee4ede'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    console.log(response.data[0].category,response.data[0].question,response.data[0].answer);
    res.render('check_api',{Category:response.data[0].category,Question:response.data[0].question,
      Answer:response.data[0].answer});
  }).catch(function (error) {
    console.error(error);
  });
});

module.exports = coin;