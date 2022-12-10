import express from "express";
import cors from "cors";
import 'dotenv/config';

const app =express(); // calling to express
app.use(cors({origin: "http://localhost:3000"})); // setup cors for our project usefully

