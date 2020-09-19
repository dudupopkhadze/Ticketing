import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
	"/api/users/signup",
	[
		body("email").isEmail().withMessage("Email must be valid."),
		body("password")
			.trim()
			.isLength({ min: 4, max: 20 })
			.withMessage("Password must be at least 4 and max 20 charachters"),
	],
	(req: Request, res: Response) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send(errors.array());
		}
		console.log("akaka");
	}
);

export { router as signUpRouter };
