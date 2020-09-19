import express from "express";

const router = express.Router();

router.get("/api/users/signup", () => {
	console.log("akaka");
});

export { router as signUpRouter };
