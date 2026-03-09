import express from "express";
import movieController from "../controllers/movieController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// ADD MOVIE
router.post("/add", upload.single("image"), movieController.createMovie);

// GET ALL MOVIES
router.get("/allMovies", movieController.allMovies);

// GET SINGLE MOVIE
router.get("/:id", movieController.getMovie);

// UPDATE MOVIE
router.patch(
  "/update/:id",
  upload.single("image"),
  movieController.updateMovie
);

// DELETE MOVIE
router.delete("/delete/:id", movieController.deleteMovie);

export default router;