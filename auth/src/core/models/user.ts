import {
	prop,
	getClassForDocument,
	getModelForClass,
} from "@typegoose/typegoose";
import { AuthMongoDB } from "../db/mongodb";
import { IUserSchema } from "../schemas/user";

export class IUser implements Omit<IUserSchema, "_id"> {
	@prop()
	email: string;

	@prop()
	password: string;

	@prop()
	createdAt: Date;

	@prop()
	updatedAt: Date;
}

export const UserModel = getModelForClass(IUser, {
	existingConnection: AuthMongoDB,
	schemaOptions: {
		collection: "users",
		timestamps: true,
		minimize: false,
	},
});
