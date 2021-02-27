const router = require("express").Router();

const db = require("../models");

//get workout
router.get("/api/workouts", (req, res) => {
    db.Workouts.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});