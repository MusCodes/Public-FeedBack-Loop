const pool= require("../modules/pool")
const express = require("express");

const router= express.Router();



// get route
router.get("/", (req, res) => {
    const sqltext= `SELECT * FROM "feedback";`;
    pool.query(sqltext).then((results) => {
    console.log("GET ROUTE WORKING LINE 10", results);
    res.send(results.rows);
    }).catch((error) => {
    console.log("error on line 13", error);
    res.sendStatus(500);
    });
    });


    // POST

    router.post("/", (req,res) =>{
        console.log("body",req.body)
        const {feelings,understanding,support,comments}= req.body
       
// were setting the sql code to value of "SQLTEXT"
        const SQLTEXT= `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1,$2,$3,$4);`;pool.query(SQLTEXT, [ feelings,understanding, support, comments]).then((response) =>{
            console.log("Post working line 26", response);
            res.sendStatus(201);
        }).catch((error) =>{
            console.log("failed Post line 29", error);
            res.sendStatus(501);
        })
    })
module.exports= router;