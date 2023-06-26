import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose
  .connect("mongodb+srv://nithinjasti:nithin7722@cluster0.ltiyy2w.mongodb.net/jnr_media?retryWrites=true&w=majority" ,
  { useNewUrlParser: true, useUnifiedTopology: true,})
  .then(() =>
    app.listen( process.env.NUM, () =>
      console.log("Listening at 3000 ")
    )
  )