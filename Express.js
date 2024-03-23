// Node VS Express 
// express easy to use hai or chalti node ki http hai par convert hoti express si  or express is package 
// http is difficult

// Routing 👌
// / wale url or iski coding karna Routing

//  ⭐MiddleWear => middlewear ek aisa function hota hai jo har route se pehle chalta hai, iska matlab saare routes
// mein koi bhi chale usse pahle middlewear chalta ha and usmein likha code pahle execute hota hai 

//✅ req =>user ka data jo server jata hai 
//💕 res => jo server si bheja jata hai jab req ati hai

// node ke saath ek dikkat hai ki agar control ek baar bhi kisi middlewear par gaya to control khud se agle route/middlewear
// par nhi jayega ,use agle par lejaane ke liye apko push kana padega uar ye push kahlayga  next ka chalana  
//  next =>

// Request and Response and Next💯
// Req => sara data hota user ki request ka 
// Res => controls hote hai jiski basis pe hum server si response bhej pate hai 
// Next => next use hota push karni request ko agi lekar jani

// Dynamic Routing ⭐
// isa route jiska kuch part same rehta aur kuch change hota hai 
//pehle kuch bhi laga kar check karo phir :kuch bhi params do aur phir `${req.params.name}` under likh kar 

// Templates Engine ⭐✔️🐫❤️
// ejs is backend html with superpower
// ek style of markup se convert karke hami html dete hai 
// ejs is very similar to html
/* <h2><%=Name%></h2>  */

// how to setup EJS ✅🥙👩‍💻💨
// 1 Ejs install    npm i ejs
// 2 configuer ejs  app.set("view engine", "ejs");
// 3 ek views folder banoa
// 4 usmein ejs files banao 
// 5 send ki jagah render karo 

// static files 🥙
// images , stylesheets, frontend js ka setup karna mean frontend ka sara 
// work public mai hoga
// Setup Files method ✔️
// 1 create a folder called public 
// 2 create three folders inside itm images , stylesheets, javascripts
// 3 configure the express static in script.js file  app.use(express.static("./public")) 



    const express = require('express');
    const app = express();

    app.use(function(req, res, next){
      next();
    })
   
    app.set("view engine", "ejs")
    app.use(express.static("./public"))   // setup files
     
    app.get('/', function (req, res) {
    res.render("index",{Name: 9527} );
    })

    app.get('/contact', function (req, res) {
      res.render("contact");
      })
    //  For Error 
      app.get('/error', function (req, res, next) {
       throw Error ("something went wrong")
      })
    // Another Dynamic Routing ✔️
    app.get('/Profile/:user', function (req, res) {
        res.send(`hello from ${req.params.user}`)
      })

      // Eror Handler
     app.use(function errorHandler (err, req, res, next) {
      if (res.headersSent) {
        return next(err)
      }
      res.status(500)
      res.render('error', { error: err })
    })
      
      app.listen(3000);