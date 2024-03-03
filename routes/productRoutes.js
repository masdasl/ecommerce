import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProducController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();
//Post
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProducController
);
router.post("/product-filters", productFiltersController);
//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);
//Get
router.get("/get-product", getProductController);
router.get("/get-product/:slug", getSingleProductController);
//product count
router.get("/product-count", productCountController);
//product per page
router.get("/product-list/:page", productListController);
//get photo
router.get("/product-photo/:pid", productPhotoController);
//similar product
router.get("/related-product/:pid/:cid", realtedProductController);
//search product
router.get("/search/:keyword", searchProductController);
//category wise product
router.get("/product-category/:slug", productCategoryController);
//payments routes
//token
router.get("/braintree/token", braintreeTokenController);
//Delete
router.delete("/delete-product/:pid", deleteProductController);
//Put
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
router.put("/order-status", requireSignIn, isAdmin);
export default router;
