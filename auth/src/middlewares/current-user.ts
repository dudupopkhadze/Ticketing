import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CurrentUser {
	id: string;
	email: string;
}

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Express {
		interface Request {
			currentUser?: CurrentUser;
		}
	}
}

export const currentUser = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.session?.jwt) {
		return next();
	}
	try {
		const currentUser = jwt.verify(
			req.session.jwt,
			process.env.JWT_KEY!
		) as CurrentUser;
		req.currentUser = currentUser;
	} catch (error) {}
	next();
};
