import Image from "next/image";
import SignupForm from "@/components/Form/SignupForm";
import Link from "@/components/Link";

export default function Page() {
  return (
    <>
      <div className="flex justify-center">
        <Image width={100} height={40} src="/next.svg" alt="logo" />
      </div>
      <h1 className="font-bold text-3xl text-center mt-6 mb-10">이모저모</h1>
      <SignupForm />
      <p className="text-base font-normal text-gray-500 text-center mt-7">
        이미 계정이 있으신가요?{" "}
        <Link href="/login" fontColor="primary" fontSize="base">
          로그인 하기
        </Link>
      </p>
    </>
  );
}
