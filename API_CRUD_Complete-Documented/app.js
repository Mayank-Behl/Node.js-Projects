/* 1 Require Express, Mongoose
 get the url(save it in dotenv) 
instantiate express 
connect to the db 
get the access to the connect db by alias name
open the connection
app.use is for the reading of json format
alienRouter is an object that specifies where the requested service is routed to depening upon the url
then app.use tells it to go that specific path and all the required requests 
app.listen is to listen to the specific port number
*/

/* Added .env connection to prevent the public use of database */

const express = require("express");
const mongoose = require("mongoose");

let dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGO_URI;

const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

con.on("open", function () {
  console.log("connected");
});

//This is to read the json format
app.use(express.json());

//Routing of the serive /aliens
const alienRouter = require("./routes/aliens");
app.use("/aliens", alienRouter);

app.listen(9000, () => {
  console.log("server started");
});
