import express from "express";

const router = express.Router();

router.post("/api/users/signin", () => {
	console.log("akaka");
});

export { router as signInRouter };
