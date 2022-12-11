import mongoose from "mongoose";
import config from "../config";

let database;

const connect = async ()=>{
    const MONGODB_URL = process.env.MONGODB_URL;
};