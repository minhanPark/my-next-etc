import Image from "next/image";

export default function Page() {
  return (
    <div className="h-full flex flex-col justify-center md:max-w-md mx-auto">
      <div className="flex justify-center">
        <Image width={100} height={40} src="/next.svg" alt="logo" />
      </div>
      <h1 className="font-bold text-3xl text-center my-6">이모저모</h1>
      <form className="block p-8 w-full bg-white border border-gray-200 rounded-lg shadow">
        <input type="text" className="bg-slate-600" />
      </form>
    </div>
  );
}
