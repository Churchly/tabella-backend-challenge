import { celebrate } from "celebrate";
import { Router } from "express";
import { emailCreate, emailList, emailPatch } from "../controllers/emailController.js";
import { emailValidation } from "../helpers/validators.js";

export const emailRouter = Router();

emailRouter.post("/", celebrate(emailValidation), emailCreate);

emailRouter.get("/", emailList);

emailRouter.patch("/:id", emailPatch);
