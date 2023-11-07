import * as mongoose from "mongoose";

const URI = process.env.MONGODB_URI as string;

const dbConnection = mongoose.createConnection(URI);

export default dbConnection;
