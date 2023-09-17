import Image from "next/image";
import LoginForm from "@/components/Form/LoginForm";
import Link from "@/components/Link";

export default function Page() {
  return (
    <>
      <div className="flex justify-center">
        <Image width={100} height={40} src="/next.svg" alt="logo" />
      </div>
      <h1 className="font-bold text-3xl text-center mt-6 mb-10">이모저모</h1>
      <LoginForm />
      <p className="text-base font-normal text-gray-500 text-center mt-7">
        계정이 없으신가요?{" "}
        <Link href="#" fontColor="primary" fontSize="base">
          회원가입 하기
        </Link>
      </p>
    </>
  );
}
