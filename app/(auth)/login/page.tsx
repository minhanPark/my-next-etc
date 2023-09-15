"use client";

import Image from "next/image";
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
        <div>
          <button type="button" onClick={handleLoading}>
            버튼
          </button>
        </div>
        <LoadingButton loading={loading} fullWidth>
          로그인
        </LoadingButton>
      </form>
    </div>
  );
}
