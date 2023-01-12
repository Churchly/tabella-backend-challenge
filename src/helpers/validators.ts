import { Joi, Segments } from 'celebrate';
import { IBodyEmail, IBodySubmission } from "../interfaces";

export const emailValidation = {
  [Segments.BODY]: Joi.object<IBodyEmail>().keys({
    address: Joi.string().email().required()
  })
};

export const submissionValidation = {
  [Segments.BODY]: Joi.object<IBodySubmission>().keys({
    subject: Joi.string().required(),
    text: Joi.string().required(),
    html: Joi.string()
  })
};