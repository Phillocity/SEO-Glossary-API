import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
import lodash from "lodash";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { defaultList } from "./defaultList.js";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const database = "seoGlossaryDB";
const password = process.env.DBPASS;
await mongoose
    .connect(`mongodb+srv://shushyy:${password}@cluster0.szrpyuj.mongodb.net/${database}`)
    .then(() => {
    console.log("Connected to database");
})
    .catch((err) => {
    console.log(err);
});
const app = express();
const port = process.env.PORT || 8080;
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
app.get("/terms", (req, res) => {
    //Get all seo terms
    Term.find({}, "-_id -__v", (err, terms) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(terms);
        }
    });
});
app.post("/terms", (req, res) => {
    const newTerm = new Term({
        term: lodash.toLower(req.body.term),
        description: lodash.capitalize(req.body.description),
    });
    newTerm.save();
    res.send(newTerm);
});
app.get("/reset", (req, res) => {
    //Reset the database
    Term.deleteMany({}, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            Term.insertMany(defaultList, (err) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send("Database reset");
                }
            });
        }
    });
});
