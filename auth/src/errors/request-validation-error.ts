import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
	statusCode = 400;
	constructor(private errors: ValidationError[]) {
		super("Database Error");
		Object.setPrototypeOf(this, RequestValidationError.prototype);
	}

	serializeError() {
		return this.errors.map((e) => ({ message: e.msg, field: e.param }));
	}
}
