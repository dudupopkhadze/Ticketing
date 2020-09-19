import express from "express";

const router = express.Router();

router.get("/api/users/signout", () => {
	console.log("akaka");
});

export { router as signOutRouter };
