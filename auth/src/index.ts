import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { routers } from "./routes";
import { errorHandler } from "./middlewares/error-hendler";
import { NotFoundError } from "./errors/not-found-error";
import mongoose from "mongoose";
const app = express();

const setUpExpressApp = async () => {
	app.use(json());
	routers.forEach((e) => app.use(e));
	app.all("*", () => {
		throw new NotFoundError();
	});
	app.use(errorHandler);

	try {
		await mongoose.connect("mongodb://localhost:27017/ticketing-auth", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});

		app.listen(3000, () => console.log("listening on 3000"));
	} catch (error) {
		console.log(error);
	}
};
setUpExpressApp();
