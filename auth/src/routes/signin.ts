import express, { Request, Response } from "express";
import { body } from "express-validator";
import { UserModel } from "../core/models/user";
import { PasswordService } from "../core/services/password";
import { BadRequestError } from "../errors/bad-request-error";
import { validateRequest } from "../middlewares/validate-request";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
	"/api/users/signin",
	[
		body("email")
			.isEmail()
			.withMessage("Email must be valid."),
		body("password")
			.trim()
			.notEmpty()
			.withMessage("You must suppy a password"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		const { email, password } = req.body;
		const curUser = await UserModel.findOne({ email });
		const invalidError = new BadRequestError("Invalid Credentials");
		if (!curUser) {
			throw invalidError;
		}

		const isCorrectPassword = await PasswordService.compare(
			curUser.password,
			password
		);
		if (!isCorrectPassword) {
			throw invalidError;
		}

		const userJWT = jwt.sign(curUser.toObject(), process.env.JWT_KEY!);
		(req as any).session = { jwt: userJWT };

		res.status(200).send(curUser);
	}
);

export { router as signInRouter };
