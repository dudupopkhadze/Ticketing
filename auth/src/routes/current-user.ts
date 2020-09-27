import express, { Request, Response } from "express";
import { JsonWebTokenError } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/current-user";
import { requireAuth } from "../middlewares/request-auth";

const router = express.Router();

router.get(
	"/api/users/currentuser",
	currentUser,

	(req: Request, res: Response) => {
		res.send({ currentUser: req.currentUser || null });
	}
);

export { router as currentUserRouter };
