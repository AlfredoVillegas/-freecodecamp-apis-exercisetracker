import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { registerUsersRoutes } from "./api/modules/User/users.route.js";
import { mongoConfig } from "./database.js";

dotenv.config();
const { urlencoded, Router } = express;

const app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const router = Router();
app.use("/api", router);
registerUsersRoutes(router);

mongoose
  .connect(mongoConfig.uri, mongoConfig.options)
  .then((db) => {
    console.log("Database is connected");

    const listener = app.listen(process.env.PORT || 3000, () => {
      console.log("Your app is listening on port " + listener.address().port);
    });
  })
  .catch((err) => console.log(err));
