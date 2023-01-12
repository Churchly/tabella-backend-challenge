import { Router } from "express";
import { emailCreate, emailList, emailPatch } from "../controllers/emailController.js";

export const emailRouter = Router();

emailRouter.post("/", emailCreate);

emailRouter.get("/", emailList);

emailRouter.patch("/:id", emailPatch);
