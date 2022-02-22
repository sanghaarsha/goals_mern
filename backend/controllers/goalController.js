// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: "Get Goals!" });
};

// @desc Set Goal
// @route SET /api/goals
// @access Private
const setGoal = (req, res) => {
    res.status(200).json({ message: "Set Goal!" });
};

// @desc Edit Goal
// @route PUT /api/goals/:id
// @access Private
const editGoal = (req, res) => {
    res.status(200).json({ message: `Update goal: ${req.params.id}` });
};

// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private
const delGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal: ${req.params.id}` });
};

module.exports = {
    getGoals,
    setGoal,
    editGoal,
    delGoal,
};
