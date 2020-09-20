import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";

interface IErrorRespone {
	errors: { message: string; field?: string }[];
}

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode).send(err.serializeError());
	}
	console.log(err.stack);
	res.status(400).send({ errors: [{ message: "Something Went Wrong" }] });
};
