import app from "./app";
const router = app.Router();

import controller from "../controllers/moviesControllers.js";

router.get("/", controller.home);
router.get("/all", controller.getAll);
router.post("/new", controller.createMovie);
router.patch("/:id", controller.updateMovieById);
router.delete("/:id", controller.deleteMovieById);

export default router;
