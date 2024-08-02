const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const ceraRouter = require("./routes/ceraRoutes");
const kapivaRouter = require("./routes/kapivaRoutes");
const avpRouter = require("./routes/avpRoutes");
const goqiiRouter = require("./routes/goqiiRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use("/products/cera", ceraRouter);
app.use("/products/kapiva", kapivaRouter);
app.use("/products/avp", avpRouter);
app.use("/products/goqii", goqiiRouter)

app.get("/", async (_, res) => {
  res.send("Welcome to Tata 1mg server!");
});

app.listen(PORT, async (_, res) => {
  try {
    await connectDb;
    console.log(`Server is listening on ${PORT} and db is connected `);
  } catch (error) {
    console.log(error.message);
  }
});
