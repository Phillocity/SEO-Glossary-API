import express, { Request, Response } from "express";
import { fileURLToPath } from "url";
import { dirname, join as pathJoin } from "path";
import bodyParser from "body-parser";
import lodash from "lodash";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { defaultList } from "./defaultList.js";
dotenv.config();

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);
const database: string = "seoGlossaryDB";
const password: any = process.env.DBPASS;

await mongoose
  .connect(
    `mongodb+srv://shushyy:${password}@cluster0.szrpyuj.mongodb.net/${database}`
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const app: express.Application = express();
const port: any = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.listen(port);
app.locals.lodash = lodash;

const termSchema = new mongoose.Schema({
  term: {
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  },
});

const Term = mongoose.model("Term", termSchema);

app.get("/terms", (req: Request, res: Response) => {
  //Get all seo terms
  Term.find({}, "-_id -__v", (err, terms) => {
    if (err) {
      res.send(err);
    } else {
      res.send(terms);
    }
  });
});

app.post("/terms", (req: Request, res: Response) => {
  const newTerm = new Term({
    term: lodash.toLower(req.body.term),
    description: lodash.capitalize(req.body.description),
  });
  newTerm.save();

  res.send(newTerm);
});

app.get("/reset", (req: Request, res: Response) => {
  //Reset the database
  Term.deleteMany({}, (err) => {
    if (err) {
      res.send(err);
    } else {
      Term.insertMany(defaultList, (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Database reset");
        }
      });
    }
  });
});
