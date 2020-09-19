import express from "express";
import { json } from "body-parser";
const app = express();
app.use(json());

app.get("/api/users/currentUser", (req, res) => {
	console.log("gblaa");
	res.send("Movida");
});

app.listen(3000, () => console.log("listening on 3000"));
