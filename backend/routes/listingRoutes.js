import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
  sellerAdminMiddleware,
} from "../middleware/authentication.js";

import {
  GetSingleListing,
  GetAllListing,
  UpdateListing,
  DeleteListing,
  GetTopRatedListing,
  CreateSingleListing,
} from "../controllers/listingControllers.js";

router
  .route("/")
  .get(GetAllListing)
  .post(authMiddleware, sellerAdminMiddleware, CreateSingleListing);

router
  .route("/:id")
  .get(GetSingleListing)
  .put(authMiddleware, sellerAdminMiddleware, UpdateListing)
  .delete(authMiddleware, DeleteListing);

export default router;
