"use client";

import { useForm } from "react-hook-form";

export default function Page() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      url: "",
    },
  });
  const onValid = (data: { url: string }) => {
    fetch("/api/preview", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("url")} />
        <button>제출</button>
      </form>
    </div>
  );
}
