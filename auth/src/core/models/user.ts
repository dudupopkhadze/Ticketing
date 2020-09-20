import {
	prop,
	getClassForDocument,
	getModelForClass,
	pre,
} from "@typegoose/typegoose";
import { AuthMongoDB } from "../db/mongodb";
import { IUserSchema } from "../schemas/user";
import { PasswordService } from "../services/password";

@pre<IUser>("save", async function(next) {
	if (this.isModified("password")) {
		const hashed = await PasswordService.toHash(this.get("password"));
		this.set("password", hashed);
	}
	next();
})
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
