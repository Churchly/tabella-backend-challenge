import { celebrate } from "celebrate";
import { Router } from "express";
import { submissionCreate, submissionList } from "../controllers/submissionController.js";
import { submissionValidation } from "../helpers/validators.js";

export const submissionRouter = Router();

submissionRouter.post("/", celebrate(submissionValidation), submissionCreate);

submissionRouter.get("/", submissionList);
