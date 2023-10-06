const express = require("express");
const { connection } = require("./configs/connect");
const router = require("./routes/authRoute");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", router);

connection();
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
