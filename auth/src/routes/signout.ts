import express from "express";

const router = express.Router();

router.post("/api/users/signout", () => {
	console.log("akaka");
});

export { router as signOutRouter };
