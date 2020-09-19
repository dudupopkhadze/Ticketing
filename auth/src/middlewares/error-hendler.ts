import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";

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

	res.status(400).send({ errors: [{ message: "Something Went Wrong" }] });
};
