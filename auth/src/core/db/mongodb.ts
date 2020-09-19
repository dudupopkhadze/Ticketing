import mongoose from "mongoose";

export const AuthMongoDB: mongoose.Connection = mongoose.createConnection(
	process.env.MONGODB_CONNECTION_URL || "mongodb://localhost/ticketing_auth",
	{
		ignoreUndefined: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	}
);
