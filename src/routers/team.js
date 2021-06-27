const express = require ("express");
const router = new express.Router();

const TeamsRanking = require("../models/teams");

//we will handle post request
//adding teams or data
router.post("/teams", async (req, res) => {
    try{
        const addingTeamsRecords = new TeamsRanking(req.body)
        console.log(req.body);
        const insertTeams  =  await addingTeamsRecords.save();
        res.status(201).send(insertTeams);
    }catch(e){
        res.status(400).send(e);
    }
})

//we will handle get request
//getting input teams or data
router.get("/teams", async (req, res) => {
    try{
        const getTeams = await TeamsRanking.find({}).sort({"position":1});
        res.status(201).send(getTeams);
    }catch(e){
        res.status(400).send(e);
    }
})

//we will handle get request of individual
//Gets Individual team
router.get("/teams/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const getTeam = await TeamsRanking.findById(_id);
        res.send(getTeam);
    }catch(e){
        res.status(400).send(e);
    }
})

//we will handle patch request of individual
//update value of individual record
router.patch("/teams/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const getTeam = await TeamsRanking.findByIdAndUpdate(_id,req.body, {
            new:true
        });
        res.send(getTeam);
    }catch(e){
        res.status(500).send(e);
    }
})

router.delete("/teams/:id", async (req, res) => {
    try{
        //const _id = req.params.id;
        const deleteTeam = await TeamsRanking.findByIdAndDelete(req.params.id);
        res.send(deleteTeam);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;