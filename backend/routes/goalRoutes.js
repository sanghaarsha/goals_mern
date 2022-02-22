const express = require("express");
const router = express.Router();
const {
    getGoals,
    setGoal,
    editGoal,
    delGoal,
} = require("../controllers/goalController");

// chaining routes
// router.get("/", getGoals);
// router.post("/", setGoal);
router.route("/").get(getGoals).post(setGoal);

// router.put("/:id", editGoal);
// router.delete("/:id", delGoal);
router.route("/:id").put(editGoal).delete(delGoal);

module.exports = router;
