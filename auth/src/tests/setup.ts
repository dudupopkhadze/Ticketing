import { MongoMemoryServer } from "mongodb-memory-server";
import { app } from "../app";
import request from "supertest";

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

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace NodeJS {
		interface Global {
			getCookie(): Promise<string[]>;
		}
	}
}

global.getCookie = async () => {
	const res = await request(app)
		.post("/api/users/signup")
		.send({ email: "test@test.com", password: "password" })
		.expect(201);

	return res.get("Set-Cookie");
};
