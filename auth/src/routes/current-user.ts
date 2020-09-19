import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", () => {
	console.log("akaka");
});

export { router as currentUserRouter };
