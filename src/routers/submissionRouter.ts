import { Router } from "express";
import { submissionCreate, submissionList } from "../controllers/submissionController.js";

export const submissionRouter = Router();

submissionRouter.post("/", submissionCreate);

submissionRouter.get("/", submissionList);
