import Image from "next/image";

import TextField from "@/components/TextField";

export default function Page() {
  return (
    <div className="h-full flex flex-col justify-center md:max-w-md mx-auto">
      <div className="flex justify-center">
        <Image width={100} height={40} src="/next.svg" alt="logo" />
      </div>
      <h1 className="font-bold text-3xl text-center mt-6 mb-10">이모저모</h1>
      <form className="block p-8 w-full bg-white border border-gray-200 rounded-lg shadow">
        <TextField label="이메일" required />
        <TextField label="비밀번호" type="password" required addClass="mt-6" />
      </form>
    </div>
  );
}
