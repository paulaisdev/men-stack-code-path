import app from "./app";
const router = app.Router();

import controller from "../controllers/moviesControllers";

router.get("/", controller.home);
router.get("/all", controller.getAll);
router.get("/all/ghlibi", controller.getAllGhlibiMovies);
router.post("/create", controller.createMoovie);
router.patch("/update/:id", controller.updateMoovieById);
router.delete("/delete/:id", controller.deleteMoovieById);

export default router;
