import Joi from "joi";

const LoginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "이메일 형식이 올바르지 않습니다.",
      "string.empty": "이메일을 입력해주세요.",
    }),
  password: Joi.string()
    .trim()
    .min(8)
    .pattern(/[a-zA-Z]/, "string")
    .pattern(/[0-9]/, "number")
    .required()
    .messages({
      "string.min": "비밀번호가 올바르지 않습니다.",
      "string.pattern.name": "비밀번호가 올바르지 않습니다.",
      "string.empty": "비밀번호를 입력해주세요.",
    }),
});

export default LoginSchema;
