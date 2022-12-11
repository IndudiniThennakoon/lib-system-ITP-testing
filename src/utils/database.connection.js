import mongoose from "mongoose";
import config from "../config";
import logger from "./logger";

let database;

const connect = async () => {
    const MONGODB_URL = process.env.DB_CONNECTION_STRING;

    if (database) return;

    mongoose
        .connect(MONGODB_URL)
        .then((connection) => {
             database.connection;
             logger.info("Database Synced");
        })
        .catch((err) => {
        logger.error(err.message);
    });
};

export {connect};