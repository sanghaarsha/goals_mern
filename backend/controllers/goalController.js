const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

// @desc Set Goal
// @route SET /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field!");
    }
    const goal = await Goal.create({
        text: req.body.text,
    });
    res.status(200).json(goal);
});

// @desc Edit Goal
// @route PUT /api/goals/:id
// @access Private
const editGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal: ${req.params.id}` });
});

// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private
const delGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal: ${req.params.id}` });
});

module.exports = {
    getGoals,
    setGoal,
    editGoal,
    delGoal,
};
