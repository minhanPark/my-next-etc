"use client";

import Image from "next/image";
import {
  useForm,
  type SubmitHandler,
  type SubmitErrorHandler,
} from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Link from "next/link";

import TextField from "@/components/TextField";
import LoginSchema from "@/libs/validations/LoginSchema";
import ErrorToast from "@/libs/toast/Error";
import LoadingButton from "@/components/LoadingButton";
import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
}

export default function Page() {
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading((prev) => !prev);
  };
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
    <div className="h-full flex flex-col justify-center md:max-w-md mx-auto">
      <div className="flex justify-center">
        <Image width={100} height={40} src="/next.svg" alt="logo" />
      </div>
      <h1 className="font-bold text-3xl text-center mt-6 mb-10">이모저모</h1>
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
            <Link
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline hover:text-emerald-600"
            >
              비밀번호 찾기
            </Link>
          </div>
        </div>
        <LoadingButton loading={loading} fullWidth>
          로그인
        </LoadingButton>
      </form>
      <p className="text-base font-normal text-gray-500 text-center mt-7">
        계정이 없으신가요?{" "}
        <Link
          href="#"
          className="text-base font-normal text-gray-500 hover:underline text-emerald-600"
        >
          회원가입하기
        </Link>
      </p>
    </div>
  );
}
