import express from "express";
const router = express.Router();

import controller from "../controllers/userController";
import authController from "../controllers/authController";

router.get("/", controller.getAll);
router.post("/", controller.createUser);
router.post("/login", authController.login);
router.patch("/:id", controller.updateUserById);
router.delete("/:id", controller.deleteUserById);

export default router;
