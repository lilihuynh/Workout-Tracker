const router = require("express").Router();
const path = require ("path");

//render exercise html
router.get("/exercise", (req,res) =>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

//render stat html
router.get("/stats", (req,res) =>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;