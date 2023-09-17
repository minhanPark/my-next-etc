"use client";

import { useState } from "react";
import {
  useForm,
  type SubmitHandler,
  type SubmitErrorHandler,
} from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import TextField from "@/components/TextField";
import LoginSchema from "@/libs/validations/LoginSchema";
import ErrorToast from "@/libs/toast/Error";
import LoadingButton from "@/components/LoadingButton";
import Link from "@/components/Link";

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: joiResolver(LoginSchema),
  });
  const onValid: SubmitHandler<FormValues> = (data) => {
    console.log("제출된 폼", data);
  };

  const onError: SubmitErrorHandler<FormValues> = (errors) => {
    console.log(errors);
    ErrorToast({
      errorMessage: errors.email?.message || errors.password?.message,
    });
  };

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
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center">
          <input
            id="remember-email"
            type="checkbox"
            value=""
            className="w-4 h-4 accent-emerald-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-email"
            className="ml-2 text-sm font-normal text-gray-500"
          >
            이메일 기억하기
          </label>
        </div>
        <div>
          <Link href="#">비밀번호 찾기</Link>
        </div>
      </div>
      <LoadingButton loading={false} fullWidth>
        로그인
      </LoadingButton>
    </form>
  );
}
