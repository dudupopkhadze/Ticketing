import { ObjectId } from "bson";

export interface IUserSchema {
	id: ObjectId;
	email: string;
	password: string;
}
