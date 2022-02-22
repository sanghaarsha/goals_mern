const express = require("express");
const router = express.Router();
const {
    getGoals,
    setGoal,
    editGoal,
    delGoal,
} = require("../controllers/goalController");
const { protect } = require("../middlewares/authMiddleware");

// chaining routes
// router.get("/", getGoals);
// router.post("/", setGoal);
router.route("/").get(protect, getGoals).post(protect, setGoal);

// router.put("/:id", editGoal);
// router.delete("/:id", delGoal);
router.route("/:id").put(protect, editGoal).delete(protect, delGoal);

module.exports = router;
