import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { UserModel } from "../core/models/user";
import { BadRequestError } from "../errors/bad-request-error";
import { RequestValidationError } from "../errors/request-validation-error";
import jwt from "jsonwebtoken";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post(
	"/api/users/signup",
	[
		body("email")
			.isEmail()
			.withMessage("Email must be valid."),
		body("password")
			.trim()
			.isLength({ min: 4, max: 20 })
			.withMessage("Password must be at least 4 and max 20 charachters"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		const { email, password } = req.body;
		const existingUser = await UserModel.findOne({ email });
		if (existingUser) {
			throw new BadRequestError("Email in Use");
		}
		const createdUser = await UserModel.create({ email, password } as any);
		const userJWT = jwt.sign(createdUser.toObject(), process.env.JWT_KEY!);
		(req as any).session = { jwt: userJWT };
		res.send(createdUser);
	}
);

export { router as signUpRouter };
