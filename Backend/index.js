const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const routes = require("./routes/TodoRoute");

const app = express();
const PORT = process.env.PORT || 5000;

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
