if (process.env.NODE_ENV == "development") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes");
const { errorhandler } = require("./middlewares");
// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);
app.use(errorhandler);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
