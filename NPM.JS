// npm like node playstore jaha packages hoti hai 
// package => files of codes

// PACKAGES => ready malte features milti 
// var onelinerjoke = require('one-liner-joke');
// console.log(onelinerjoke.getRandomJoke());

// Express JS 
// express framework for Node.js 
// Routing => / ki agi kuch bhi route kahlata hai 
// Type important[Get Post ] put patch delete
// Get => / ki baad data visible hota hai 
// Post => / ki baad data nhi jo text kara hai visible hota hai 

app.use(function(req, res ,next){
console.log("hoolala ray");
next();
})

const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hi')
})
app.listen(3000)
// -g => si  window mai install hoga  
// npm i nodemon -g
// phir node ki nodemon use karna hai 
// npx use in start 

// MiddleWear => Route chalni si pehli jo chali ga or jab chalta hai to req jam hogi route nhi chali ga is si bechni 
// ki liye next() or pramater do next