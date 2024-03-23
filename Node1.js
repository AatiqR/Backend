const express = require('express');
const app = express();
const userModel = require("./Node1 MD")

app.set("view engine", "ejs");
app.get('/', function (req, res) {
  res.render('Md');
})
app.get('/create', async function (req, res) {
const createuser = await userModel.create({//async hai and mai chali ga||async or awit laga do to pehli yeh chali gai
        username: "Aatiq", 
        name: "aatiqR",
        age:16
    })
    res.send(createuser);
  })
app.listen(3000)