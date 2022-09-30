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
const database = process.env.DATABASE;
const mongo = process.env.MONGO;
await mongoose
    .connect(mongo + database)
    .then(() => {
    console.log("Connected to database");
})
    .catch((err) => {
    console.log(err);
});
const app = express();
const port = process.env.PORT;
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
/* ----------------------------- Reset the database to base values every minute ---------------------------- */
setInterval(() => {
    const sec = new Date().getSeconds();
    if (sec === 0) {
        Term.deleteMany({}, (err) => {
            Term.insertMany(defaultList, (err) => {
                console.log("Database Reset");
            });
        });
    }
}, 1000);
/* ---------------------------------------------------------------------------------------------- */
/*                                     Main seo terms endpoint                                    */
/* ---------------------------------------------------------------------------------------------- */
app
    .route("/terms")
    .get((req, res) => {
    /* -------------- Grabs all seo terms available whilst filtering out version and id ------------- */
    Term.find({}, "-_id -__v", (err, terms) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(terms);
        }
    });
})
    .post((req, res) => {
    const newTerm = new Term({
        term: lodash.toLower(req.body.term),
        description: lodash.capitalize(req.body.description),
    });
    newTerm.save();
    res.send(newTerm);
})
    .delete((req, res) => {
    Term.deleteMany({}, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully deleted all terms");
        }
    });
});
/* ---------------------------------------------------------------------------------------------- */
/*                                Actions across specified endpoint                                */
/* ---------------------------------------------------------------------------------------------- */
app
    .route("/terms/:termName")
    .get((req, res) => {
    const query = lodash.toLower(req.params.termName);
    /* ------- Finds all seo terms that contain query substring but also allowing exact match ------- */
    Term.find({
        $or: [{ term: { $regex: query } }, { description: { $regex: query } }],
    }, "-_id -__v", (err, terms) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(terms);
        }
    });
})
    .put((req, res) => {
    const termName = lodash.toLower(req.params.termName);
    const termUpdate = lodash.toLower(req.body.term);
    const descriptionUpdate = lodash.capitalize(req.body.description);
    Term.updateOne({ term: termName }, { term: termUpdate, description: descriptionUpdate }, (err) => {
        if (!err) {
            res.send(`Successfully updated [${termName}] to [${termUpdate}]`);
        }
    });
})
    .patch((req, res) => {
    const termName = lodash.toLower(req.params.termName);
    const termUpdate = req.body;
    Term.updateOne({ term: termName }, { $set: termUpdate }, (err) => {
        if (err)
            return res.send(err);
        res.send(`Successfully updated ${termName} with ${termUpdate}`);
    });
})
    .delete((req, res) => {
    const termName = lodash.toLower(req.params.termName);
    Term.deleteOne({ term: termName }, (err) => {
        if (err)
            return res.send(err);
        res.send(`Successfully deleted [${termName}]`);
    });
});
/* ---------------------------------------------------------------------------------------------- */
/*                   Resets the database to the default list of seo terms on GET                  */
/* ---------------------------------------------------------------------------------------------- */
app.get("/reset", (req, res) => {
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
