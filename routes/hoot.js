import { Router } from "express";
import * as hootController from "../controllers/hoots.js";
import { verifyToken } from "../middleware/verify-token.js";
import { verify } from "crypto";

const router = Router();

router.post("/", verifyToken, hootController.createHoot);
<<<<<<< HEAD

router.get("/", hootController.getHoots);

router.get("/:hootId", hootController.getHoot);
// router.put("/:hootId", );
=======
// router.get("/", );
router.put("/:hootId", verifyToken, hootController.updateHoot);
router.get("/:hootId", verifyToken, hootController.getHoot);
>>>>>>> development
// router.delete("/:hootId");
// router.post("/:hootId", );

export default router;
