// EXPRESS GENERATOR ⭐
//  step to use express generator 
// must install one time globally
// npm i express-generator -g 
//cd desktop likh kar usi waha par lay aou|CD => cd si jagah woh is file ki andar jo likhi ho 
// express forldername --view=ejs 
// now use two main command
// cd foldername 
// npm install
// code .  use for vs code open this file 

// Differnce 
// app.get -> Router.get 
// npx nodemon name -> npx nodemon 

// MONGODB 
// Database jaha web ka datastore hota hai | ik DB mai bi kiye container hoti hai 
// type of database relational / non-relational >

// full app data => DB
// or iski subcategory kehlata hai colletion => users ka data
 // only one user is doucument
 
// Models  (code) => | collection => model banata contianer jaise hum kehte hai colletion model bnao colletion baniga
// Scheme (code) => | documents (db)
// CODE SIDE    |      MD SIDE 
// dB setup     |      Db formation
// Model        |      Colletion 
// schema       |      Documents

// Install Mongodb
// install mongoosejs
// require and setup connection 
// make schema
// create model and export

const mongoose = require("mongoose");
mongoose.connect("mongodb:127.0.0.1:27017/Task"); // this create Db 

const user = mongoose.Schema({ // this create document kesa hoga
    username: String,
    name:String,
    age: Number
})
module.exports = mongoose.model("TaskCollector", user)  //is naam collection wala banega 