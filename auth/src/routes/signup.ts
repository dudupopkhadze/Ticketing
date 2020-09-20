import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { UserModel } from "../core/models/user";
import { BadRequestError } from "../errors/bad-request-error";
import { RequestValidationError } from "../errors/request-validation-error";

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
	async (req: Request, res: Response) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			throw new RequestValidationError(errors.array());
		}
		const { email, password } = req.body;
		const existingUser = await UserModel.findOne({ email });
		if (existingUser) {
			console.log("Sdsdd");
			throw new BadRequestError("Email in Use");
		}
		const createdUser = await UserModel.create({ email, password } as any);

		console.log(createdUser);
		res.send(createdUser);
	}
);

export { router as signUpRouter };
