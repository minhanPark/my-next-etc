"use client";

import Image from "next/image";
import { useForm, type SubmitHandler } from "react-hook-form";

import TextField from "@/components/TextField";

interface FormValues {
  email: string;
  password: string;
}

export default function Page() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onValid: SubmitHandler<FormValues> = (data) => {
    console.log("제출된 폼", data);
  };
  return (
    <div className="h-full flex flex-col justify-center md:max-w-md mx-auto">
      <div className="flex justify-center">
        <Image width={100} height={40} src="/next.svg" alt="logo" />
      </div>
      <h1 className="font-bold text-3xl text-center mt-6 mb-10">이모저모</h1>
      <form
        onSubmit={handleSubmit(onValid)}
        className="block p-8 w-full bg-white border border-gray-200 rounded-lg shadow"
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
          addClass="mt-6"
          register={register("password")}
        />
        <button>제출</button>
      </form>
    </div>
  );
}
