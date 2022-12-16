import express from "express";
const router = express.Router();

import controller from "../controllers/userController";
import authController from "../controllers/authController";

router.get("/all", controller.getAll);
router.post("/create", controller.createUser);
router.post("/login", authController.login);
router.patch("/update/:id", controller.updateUserById);
router.delete("/delete/:id", controller.deleteUserById);

export default router;
