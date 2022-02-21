const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require('cors')
require('dotenv').config()

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

//Schema
let exerciseSessionSchema = new mongoose.Schema({
  description: {type: String, required: true},
  duration: {type: Number, required: true},
  date: String
});

let userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  log: [exerciseSessionSchema]
});

//Model
let Session = new mongoose.model("Session", exerciseSessionSchema);
let User = new mongoose.model("User", userSchema);

//Create new user
app.post("/api/users", bodyParser.urlencoded({extended: false}), (req, res) => {
  let newUser = new User({username: req.body.username})
  newUser.save((err, savedUser)=>{
    if(!err) {
      res.json({"username": savedUser.username, "_id": savedUser.id});
    }
  })
});

//Get list of users
app.get("/api/users", (req, res)=>{
  User.find({}, (err, arrayOfUsers)=>{
    if(!err) {
      res.json(arrayOfUsers);
    }
  })
});

//Handle add exercise post request
app.post("/api/users/:_id/exercises", bodyParser.urlencoded({extended: false}), (req, res) => {
  let newSession = new Session({
    description: req.body.description,
    duration: parseInt(req.body.duration),
    date: req.body.date
  });

  if (newSession.date === "") {
    newSession.date = new Date().toDateString();
  } else {
    newSession.date = new Date(newSession.date).toDateString();
  }

  User.findByIdAndUpdate(req.params._id, {$push: {log: newSession}}, {new: true}, (err, updatedUser) => {
    if(!err) {
      let resObject = {}
      resObject["username"] = updatedUser.username;
      resObject["description"] = newSession.description;
      resObject["duration"] = newSession.duration;
      resObject["date"] = newSession.date;
      resObject["_id"] = updatedUser.username;
      res.json(resObject);
    }
  });
});

//Handle exercise log get request
app.get("/api/users/:_id/logs", (req, res)=>{
  User.findById(req.params._id, (err, result)=>{
    if(!err) {
      let resObject = {
        _id: result._id,
        username: result.username,
        count: result.log.length,
        log: result.log
      }
      if (req.query.limit) {
        resObject.log = resObject.log.slice(0, req.query.limit);
      }

      if (req.query.from || req.query.to) {
        let fromDate = new Date(0);
        let toDate = new Date();

        if (req.query.from) {
          fromDate = new Date(req.query.from)
        }

        if (req.query.to) {
          toDate = new Date(req.query.to);
        }

        fromDate = fromDate.getTime();
        toDate = toDate.getTime();

        resObject.log = resObject.log.filter((s) => {
          let sDate = new Date(s.date).getTime()

          return sDate >= fromDate && sDate <= toDate;
        })
      }

      res.json(resObject);
    }
  })
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
