"use client";

import {
  useForm,
  type SubmitHandler,
  type SubmitErrorHandler,
} from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import TextField from "@/components/TextField";
import ErrorToast from "@/libs/toast/Error";
import LoadingButton from "@/components/LoadingButton";
import Link from "@/components/Link";
import SignupSchema from "@/libs/validations/SignupSchema";

interface FormValues {
  email: string;
  password: string;
  passwordCheck: string;
}

export default function SignupForm() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      passwordCheck: "",
    },
    resolver: joiResolver(SignupSchema),
  });

  const onValid: SubmitHandler<FormValues> = (data) => {
    console.log("제출된 폼", data);
  };

  const onError: SubmitErrorHandler<FormValues> = (errors) => {
    console.log(errors);
    ErrorToast({
      errorMessage:
        errors.email?.message ||
        errors.password?.message ||
        errors.passwordCheck?.message,
    });
  };
  //   FIXME: 확인 끝나면 폼에 noValidate 제거
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onValid, onError)}
      className="block py-8 px-10 w-full bg-white border border-gray-200 rounded-lg shadow"
    >
      <TextField
        label="이메일"
        type="email"
        required
        register={register("email")}
      />
      <TextField
        label="비밀번호"
        type="password"
        required
        addClass="mt-4"
        register={register("password")}
      />
      <TextField
        label="비밀번호 확인"
        type="password"
        required
        addClass="mt-4"
        register={register("passwordCheck")}
      />
      <p className="text-sm text-gray-500 mt-1">
        영문 + 숫자 + 특수문자 포함 8자 이상
      </p>
      <div className="flex flex-col my-5">
        <div className="flex items-center">
          <input
            id="약관1"
            type="checkbox"
            value=""
            className="w-4 h-4 accent-emerald-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor="약관1"
            className="ml-2 text-sm font-normal text-gray-500"
          >
            무슨무슨 약관에도 동의합니다. ( <Link href="#">보러가기</Link> )
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="약관2"
            type="checkbox"
            value=""
            className="w-4 h-4 accent-emerald-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor="약관2"
            className="ml-2 text-sm font-normal text-gray-500"
          >
            무슨무슨 약관에 동의합니다. ( <Link href="#">보러가기</Link> )
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="약관3"
            type="checkbox"
            value=""
            className="w-4 h-4 accent-emerald-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor="약관3"
            className="ml-2 text-sm font-normal text-gray-500"
          >
            개인정보를 넘기는 약관에 동의합니다. ({" "}
            <Link href="#">보러가기</Link> )
          </label>
        </div>
      </div>
      <LoadingButton loading={false} fullWidth>
        회원가입
      </LoadingButton>
    </form>
  );
}
