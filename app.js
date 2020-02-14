import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import { router as routes } from "./routes";
import { errorhandler } from "./middlewares";
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use(errorhandler);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
