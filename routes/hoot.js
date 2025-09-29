import { Router } from "express";
import * as hootController from "../controllers/hoots.js";
import { verifyToken } from "../middleware/verify-token.js";
import { verify } from "crypto";

const router = Router();

router.post("/", verifyToken, hootController.createHoot);
// router.get("/", );
router.get("/:hootId", verifyToken, hootController.getHoot);
// router.put("/:hootId", );
// router.delete("/:hootId");
// router.post("/:hootId", );

export default router;
