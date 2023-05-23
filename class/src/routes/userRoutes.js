import express from "express";
const router = express.Router();

import controller from "../controllers/userController";

router.get("/", controller.getAll);
router.post("/", controller.createUser);
router.patch("/:id", controller.updateUserById);
router.delete("/:id", controller.deleteUserById);

export default router;
