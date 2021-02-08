/* 
2. Uses router for rotuing purpose
create an object which could access the databse schema for all the information related command that is CRUD
get request 
get request for specific id
post request
path request
delete request
use async and await for asynchronous programming
export the router so that app.js can acess this router and all the sub routes here
*/

const express = require("express");
const router = express.Router();
const Alien = require("../models/alien");

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
    try {
      const alien = await Alien.findById(req.params.id);
      res.json(alien);
    } catch (err) {
      res.send("Error" + err);
    }
  });

router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try{
    const a1 = await alien.save();
    res.json(a1);
  }catch(err){
      res.send('error');
  }
});

router.patch('/:id', async(req,res)=>{
    try{
            const alien = await Alien.findById(req.params.id);
            alien.sub  = req.body.sub;
            const a1 = await alien.save();
            res.json(a1);
    }catch(err){    
        res.send("cannot update");
    }
});

router.delete('/:id', async(req,res)=>{
    try{
            const alien = await Alien.findById(req.params.id);
            const a1 = await alien.delete();
            res.json(`delete ${a1}`);
    }catch(err){    
        res.send("cannot update");
    }
});

module.exports = router;
