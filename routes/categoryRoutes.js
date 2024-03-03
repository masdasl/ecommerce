import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  singleCategoryController,
  updateCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();
//POST
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
//PUT
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
//DELETE
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);
//GET
router.get("/get-category", categoryController);
router.get("/single-category/:slug", singleCategoryController);
export default router;
