import { ObjectId } from "bson";

export interface IUserSchema {
	_id: ObjectId;
	email: string;
	password: string;
}
