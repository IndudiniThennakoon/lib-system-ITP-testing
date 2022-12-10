import express from "express";
import cors from "cors";
import 'dotenv/config';

const app =express(); // calling to express

app.use(cors()); // now this backend can access any third party application
app.use(express.json({limit:"20mb"})); //limit data which coming from request body(json object)


