const express = require('express');
const app = express();
const fetch = require('node-fetch');
const getSearchUrl = require('../../restaurant/src/app/config/lookup-search-api');


app.get('/', function(req, res) {
  const nextUrl = getSearchUrl();
  console.log('serving from ', nextUrl);
  return fetch(`${nextUrl}restaurants`)
         .then (response => response.json())
         .then ( results => {
           res.json(results);
         })

})

app.listen(9999);