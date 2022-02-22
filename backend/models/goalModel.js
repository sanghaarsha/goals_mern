const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
    {
        // associating user to the goal
        user: {
            type: mongoose.Schema.Types.ObjectId, //_id type
            required: true,
            ref: "User", // reference to User model
        },
        text: {
            type: String,
            required: [true, "Please add a text value"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Goal", goalSchema);
