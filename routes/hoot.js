import { Router } from "express";
import * as hootController from "../controllers/hoots.js";
import { verifyToken } from "../middleware/verify-token.js";
import { verify } from "crypto";

const router = Router();

router.post("/", verifyToken, hootController.createHoot);
// router.get("/", );
router.put("/:hootId", verifyToken, hootController.updateHoot);
router.get("/:hootId", verifyToken, hootController.getHoot);
// router.delete("/:hootId");
router.post("/:hootId", verifyToken, hootController.postComment);

export default router;
