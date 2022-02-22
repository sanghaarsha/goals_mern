const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middlewares/errorMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();

// middlewares to parse body data and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

// overwrite express default error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server live at http://localhost:${PORT}`);
});
