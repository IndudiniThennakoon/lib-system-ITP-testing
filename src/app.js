import express from "express";
import cors from "cors";
import 'dotenv/config';

const app =express(); // calling to express
app.use(cors({origin: ["http://localhost:3000","https://google.console.com"]})); // accessing specific urls by using array


