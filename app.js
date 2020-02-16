import "./config/dotenv";
import express from "express";
import session from "express-session";
import cors from "cors";
import { router as routes } from "./routes";
import { errorhandler } from "./middlewares";
import connectSequelize from "connect-session-sequelize";
import Model from "./db/models";
const app = express();
const PORT = process.env.PORT || 3000;
const { sequelize } = Model;
const SequelizeStore = connectSequelize(session.Store);
const myStore = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval: 900000,
  expiration: 86400000
});
// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    store: myStore,
    saveUninitialized: false
  })
);
myStore.sync();
app.use(routes);
app.use(errorhandler);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
