import dbConnection from "@/lib/mongodb/db";
import {Schema} from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    events: [Schema.Types.ObjectId]
});

const UserModel = dbConnection.model('User', userSchema);

export const createUser = async (values: User) => await new UserModel(values)
    .save().then((user) => user.toObject());

export const getUserByEmail = async (email: string) => await UserModel.findOne({ email }).lean();

export const getUserById = async (id: Schema.Types.ObjectId) => await UserModel.findById(id).lean();

export const updateUserById = async (id: string, values: Record<string, any>) => await UserModel.findByIdAndUpdate(id, values);
