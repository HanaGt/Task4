import Link from "next/link";

export default function Home() {
  return (
    <Link href="/job">
      <div className="flex-col justify-around w-3/5 mx-auto">
        <div className="text-center mt-5">
          <p className="font-epilogue">Click to See Job Opportunities</p>
        </div>
        <div className="rounded-md bg-white text-center shadow-md p-5 cursor-pointer">
          <p className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[16px]">
            See Jobs List
          </p>
        </div>
      </div>
    </Link>
  );
}
