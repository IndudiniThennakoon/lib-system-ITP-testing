import mongoose from "mongoose";
import config from "../config";
import logger from "./logger";

let database;

const connect = async () => {
    const MONGODB_URL = process.env.DB_CONNECTION_STRING;


    

};