import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
	reason = "Failed to connect to the database";
	statusCode = 500;

	constructor() {
		super("Invalid Request Parametrs");
		Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
	}
	serializeError() {
		return [{ message: this.reason }];
	}
}
