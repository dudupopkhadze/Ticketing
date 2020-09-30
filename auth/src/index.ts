import mongoose from "mongoose";
import { app } from "./app";

require("dotenv").config();

const start = async () => {
	try {
		console.log("SAdasdasd");
		await mongoose.connect("mongodb://localhost:27017/ticketing-auth", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});

		app.listen(3001, () => console.log("listening on 3001"));
	} catch (error) {
		console.log(error);
	}
};
start();
