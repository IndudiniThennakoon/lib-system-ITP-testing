import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import 'dotenv/config';


const app =express(); // calling to express
const PORT = process.env.PORT || "8090";

app.use(cors()); // now this backend can access any third party application
app.use(express.json({limit:"20mb"})); //limit data which coming from request body(json object)

app.get("/",(req,res,next)=>{
    res.send("<h2>📚 Library Management System API </h2>"); // root API response
    next();
});

app.listen(PORT, () =>{
    logger.info("This is testing");
    console.log(`🚀 Server is up and running on PORT ${PORT}`);
});
