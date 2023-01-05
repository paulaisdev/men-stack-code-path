import app from "./app";
const router = app.Router();

import controller from "../controllers/moviesControllers";

router.get("/", controller.home);
router.get("/all", controller.getAll);
router.post("/create", controller.createMovie);
router.patch("/update/:id", controller.updateMovieById);
router.delete("/delete/:id", controller.deleteMovieById);

export default router;
