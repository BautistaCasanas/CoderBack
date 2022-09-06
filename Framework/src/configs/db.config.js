import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from '../utils/loggers/Log4jsLogger.js';

dotenv.config();

mongoose.connect("mongodb+srv://admin1:admin1@ecommerce.c98cs.mongodb.net/?retryWrites=true&w=majority", (err) => {
    err
        ? logger.error("⛔ Error al conectarse a MongoDB")
        : logger.info("🆗 Conectados a MongoDB")
})

export default mongoose;
