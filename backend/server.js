const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

//Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/todos", require("./routes/todoRoutes"));

//Use custom error handling rather than default express handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on part ${port}`);
});
