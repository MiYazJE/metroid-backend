import Joi from "@hapi/joi";
import {IUser} from "../model/Users.model";

export const signUpValidation = (data: IUser) => {
  const userSchema = Joi.object({
    email: Joi
      .string()
      .required(),
    password: Joi
      .string()
      .max(150)
      .required(),
    username: Joi
      .string()
      .required(),
  });

  return userSchema.validate(data);
}

export const signInValidate = (data: IUser) => {
  const userSchema = Joi.object({
    email: Joi
      .string()
      .required(),
    password: Joi
      .string()
      .min(4)
      .required()
  });

  return userSchema.validate(data);
}
