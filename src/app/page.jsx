"use client";
import { useState } from "react";
import { Step1 } from "../components/StepOne";
import { Step2 } from "../components/StepTwo";
import { Step3 } from "../components/StepThree";

export default function Home() {
  const [page, setPage] = useState(0);
  const currentPage = () => {
    if (page === 0) {
      return <Step1 />;
    }
    if (page === 1) {
      return <Step2 />;
    }
    if (page === 2) {
      return <Step3 />;
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex text-center flex-col gap-3 w-[500px] h-[500px] bg-gray-400">
        <div className="body">{currentPage()}</div>
        <div className="flex gap-5">
          <button
            onClick={() => setPage(page - 1)}
            className="w-[100px] h-[50px] bg-red-500"
          >
            Prev
          </button>
          <button
            className="w-[100px] h-[50px] bg-red-500"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
