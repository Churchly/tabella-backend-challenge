import { Joi, Segments } from 'celebrate';
import { IBodyEmail, ISubmission } from "../interfaces";

export const emailValidation = {
  [Segments.BODY]: Joi.object<IBodyEmail>().keys({
    address: Joi.string().email().required()
  })
};

export const submissionValidation = {
  [Segments.BODY]: Joi.object<ISubmission>().keys({
    from: Joi.string().email().required(),
    to: Joi.string().email().required(),
    subject: Joi.string().required(),
    text: Joi.string().required(),
    html: Joi.string()
  })
};