import { Router } from "express";
import * as hootController from "../controllers/hoots.js";
import { verifyToken } from "../middleware/verify-token.js";

const router = Router();

router.post("/", verifyToken, hootController.createHoot);

router.get("/", hootController.getHoots);

router.get("/:hootId", hootController.getHoot);
// router.put("/:hootId", );
// router.delete("/:hootId");
// router.post("/:hootId", );

export default router;
