import express from "express";

const router = express.Router();

router.get("/api/users/signin", () => {
	console.log("akaka");
});

export { router as signInRouter };
