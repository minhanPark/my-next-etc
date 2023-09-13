import Joi from "joi";

const LoginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "이메일 형식이 올바르지 않습니다.",
    }),
  password: Joi.string().min(8).required(),
});

export default LoginSchema;
