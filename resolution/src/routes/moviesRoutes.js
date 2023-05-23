import app from "./app";
const router = app.Router();

import controller from "../controllers/moviesControllers";

router.get("/", controller.getAll);
router.get("/ghlibi", controller.getAllGhlibiMovies);
router.post("/", controller.createMovie);
router.patch("/:id", controller.updateMovieById);
router.delete("/:id", controller.deleteMovieById);

export default router;
