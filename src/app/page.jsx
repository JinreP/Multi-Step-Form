"use client";
import { useState } from "react";
import { Step1 } from "../components/StepOne";
import { Step2 } from "../components/StepTwo";
import { Step3 } from "../components/StepThree";

export default function Home() {
  const [page, setPage] = useState(0);
  const [data, setDate] = useState({
    FirstName: "",
    LastName: "",
    Username: "",
    email: "",
    number: "",
    password: "",
    confirmPass: "",
    date: "",
  });
  const currentPage = () => {
    if (page === 0) {
      return <Step1 data={data} setDate={setDate} />;
    }
    if (page === 1) {
      return <Step2 data={data} setDate={setDate} />;
    }
    if (page === 2) {
      return <Step3 data={data} setDate={setDate} />;
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex text-center flex-col gap-3 w-[500px] h-[500px] bg-white">
        <img src="./logo.png" alt="test" className="w-[100px] h-[100px]" />
        <h1 className="font-bold text-black text-3xl">Join Us! 😎</h1>
        <p className="text-gray-400">
          Please provide all current information accurately.
        </p>
        <div className="body">{currentPage()}</div>
        <div className="flex gap-5">
          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="w-[100px] h-[50px] bg-red-500"
            >
              Prev
            </button>
          )}

          <button
            className="w-[100px] h-[50px] bg-red-500"
            onClick={() => {
              if (page === 2) {
                alert("Done");
              } else {
                setPage(page + 1);
              }
            }}
          >
            {page === 2 ? "Submit" : "Continue "}
          </button>
        </div>
      </div>
    </div>
  );
}
