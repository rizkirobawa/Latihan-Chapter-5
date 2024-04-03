const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const v1 = require("./routes/v1/index.js");
app.use("/v1", v1);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
