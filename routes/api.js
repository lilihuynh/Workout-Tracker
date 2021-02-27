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

//create new workout, post route
router.post("/api/workouts", ({ body }, res) => {
    db.Workouts.create(body)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
})

//get workouts by range
router.get("/api/workouts/range", (req, res) => {
    db.Workouts.find({})
    .then(dbWorkouts => {
       
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

//put route, update workouts by adding exercises
router.put("/api/workouts/:id", (req, res) => {
    db.Workouts.findByIdAndUpdate(
        { _id: req.params.id },
        {$push:
            {exercises : req.body}
        }
    ).then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
})

module.exports = router;