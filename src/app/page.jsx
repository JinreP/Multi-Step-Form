"use client";
import { use, useState } from "react";
import { Step1 } from "../components/StepOne";
import { Step2 } from "../components/StepTwo";
import { Step3 } from "../components/StepThree";
import { Submitted } from "@/components/Submit";
import { Buttons } from "../components/Buttons";

export default function Home() {
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(1);
  const [errors, setErrors] = useState({
    FirstName: null,
    LastName: null,
    Username: null,
    email: null,
    number: null,
    password: null,
    confirmPass: null,
    date: null,
  });
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
  const submit = (e) => {
    e.preventDefault();
    if (e.target.FirstName.value.length === 0) {
      setErrors({ ...errors, FirstName: "First name is required" });
    }
    if (e.target.LastName.value.length === 0) {
      setErrors({ ...errors, LastName: "Last name is required" });
    }
    if (e.target.Username.value.length === 0) {
      setErrors({ ...errors, Username: "Username is required" });
    }
    console.log(e.target.FirstName.value);
  };
  const currentPage = () => {
    if (page === 0) {
      return (
        <Step1
          data={data}
          setData={setData}
          errors={errors}
          setErrors={setErrors}
          page={page}
          submit={submit}
          setPage={setPage}
        />
      );
    }
    if (page === 1) {
      return (
        <Step2
          data={data}
          setData={setData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    }
    if (page === 2) {
      return (
        <Step3
          data={data}
          setData={setData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <div className="flex text-center flex-col gap-3 w-[400px] h-[600px] bg-white">
        {page < 3 && (
          <div>
            <img src="./logo.png" alt="test" className="w-[100px] h-[100px]" />
            <div className="flex flex-col items-start justify-start">
              <h1 className="font-bold text-black text-3xl">Join us! 😎</h1>
              <p className="text-gray-400">
                Please provide all current information accurately.
              </p>
            </div>{" "}
          </div>
        )}
        <div className="body">{currentPage()}</div>

        <div className="flex gap-5">
          {page > 0 && page !== page.length - 1 ? (
            <Buttons
              page={page}
              submit={submit}
              setPage={setPage}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
              isContinue={true}
              text={"Prev"}
              prevBtn={() => {
                setPage(page - 1);
                setIndex((prev) => prev - 1);
              }}
            />
          ) : (
            ""
          )}

          {page < page.length - 1 ? (
            <Buttons
              page={page}
              submit={submit}
              setPage={setPage}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
              isContinue={false}
              setIndex={setIndex}
              text={"Continue"}
              index={index}
              continueBtn={() => {
                setPage(page + 1);
                setIndex((prev) => prev + 1);
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
