import { MongoMemoryServer } from "mongodb-memory-server";
import { app } from "../app";

import { AuthMongoDB } from "../core/db/mongodb";
let mongo: any;
beforeAll(async () => {
	process.env.JWT_KEY = "sdadasdasdasdasdasd";
	mongo = new MongoMemoryServer();
	process.env.MONGODB_TEST = await mongo.getUri();
});

beforeEach(async () => {
	const collections = await AuthMongoDB.db.collections();
	for (const coll of collections) {
		await coll.deleteMany({});
	}
});

afterAll(async () => {
	await mongo.stop();
	await AuthMongoDB.close();
	process.env.MONGODB_TEST = undefined;
});
