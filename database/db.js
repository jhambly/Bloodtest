const mongoose = require("mongoose");
const config = require("config");

//let connectionString = config.get("server.connectionstring");
let connectionString = "mongodb+srv://chelsea-blake:Idexx123@cluster0-qjnou.mongodb.net/test?retryWrites=true";
console.log(connectionString);

module.exports = function () {
  mongoose
    .set("useFindAndModify", false)
    .connect(connectionString, { useNewUrlParser: true })
    .then(() => console.log("Connected to Mongo localhost..."))
    .catch(err => console.error("Could not connect", err));

  process.on('SIGINT', function () {
    mongoose.disconnect(function () {
      console.log("Mongoose default connection is disconnected...");
      process.exit(0)
    });
  });
};
