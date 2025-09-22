"use client";
import { useState } from "react";
import { Step1 } from "../components/StepOne";
import { Step2 } from "../components/StepTwo";
import { Step3 } from "../components/StepThree";
import { Buttons } from "../components/Buttons";

export default function Home() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
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
      return <Step1 data={data} setData={setData} />;
    }
    if (page === 1) {
      return <Step2 data={data} setData={setData} />;
    }
    if (page === 2) {
      return <Step3 data={data} setData={setData} />;
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex text-center flex-col gap-3 w-[400px] h-[600px] bg-white">
        <img src="./logo.png" alt="test" className="w-[100px] h-[100px]" />
        <h1 className="font-bold text-black text-3xl">Join Us! 😎</h1>
        <p className="text-gray-400">
          Please provide all current information accurately.
        </p>
        <div className="body">{currentPage()}</div>
        <div className="flex gap-5">
          <Buttons
            page={page}
            setPage={setPage}
            data={data}
            setData={setData}
          />
        </div>
      </div>
    </div>
  );
}
