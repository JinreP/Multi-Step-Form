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

    let newErrors = {};

    if (data.FirstName.trim().length === 0) {
      newErrors.FirstName = "First name is required";
    } else if (data.FirstName.trim().length < 3) {
      newErrors.FirstName = "First name is too short";
    }
    if (data.LastName.trim().length === 0) {
      newErrors.LastName = "Last name is required";
    } else if (data.LastName.trim().length < 3) {
      newErrors.LastName = "Last name is too short";
    }

    if (data.Username.trim().length === 0) {
      newErrors.Username = "Username is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setPage(page + 1);
      setIndex(index + 1);
    }
  };
  const validation = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (data.email.trim().length === 0) {
      newErrors.email = "email is required";
    } else if (data.email.includes("@") && data.email.includes(".com"))
      if (data.number.trim().length === 0) {
        newErrors.number = "Phone number is required";
      } else if (data.number.length > 8) {
        newErrors.number = "enter you're real number";
      }
    if (data.password.trim().length === 0) {
      newErrors.password = "password is required";
    } else if (data.password.length < 8) {
      newErrors.password = "weak password";
    }
    console.log("pass:");
    console.log(data.password);

    if (data.password !== data.confirmPass) {
      newErrors.confirmPass = "Pasword is not matching";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setPage(page + 1);
      setIndex(index + 1);
    }
  };
  const finish = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (data.date.trim() > 100) {
      newErrors.date = "old fucker";
    }
    if (Object.keys(newErrors).length === 0) {
      setPage(3);
      setIndex(3);
    }
  };
  //   let newErrors = {};
  // };
  const totalPages = 4;

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
          validation={validation}
          setErrors={setErrors}
        />
      );
    }
    if (page === 2) {
      return (
        <Step3
          data={data}
          submit={submit}
          setData={setData}
          finish={finish}
          errors={errors}
          setErrors={setErrors}
        />
      );
    }
    if (page === 3) return <Submitted />;
  };
  function continueBtn() {
    setPage(page + 1);
    setIndex((prev) => prev + 1);
  }
  function prevBtn() {
    setPage(page - 1);
    setIndex((prev) => prev - 1);
  }
  const keyboard = (e) => {
    if (e.key === "Enter") {
      continueBtn();
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <div className="flex text-center flex-col gap-3 w-[400px] h-[600px] bg-white">
        {page < 3 && (
          <div>
            <img src="/logo.png" alt="test" className="w-[100px] h-[100px]" />
            <div className="flex flex-col items-start justify-start">
              <h1 className="font-bold text-black text-3xl ">Join us! 😎</h1>
              <p className="text-gray-400">
                Please provide all current information accurately.
              </p>
            </div>{" "}
          </div>
        )}
        <div className="body">{currentPage(page)}</div>

        <div className="flex gap-5">
          {page > 0 && page < 3 && (
            <Buttons isContinue={false} text="Prev" prevBtn={prevBtn} />
          )}

          {page < 2 && (
            <Buttons
              isContinue
              text={`Continue`}
              submit={page === 0 ? submit : undefined}
              validation={page === 1 ? validation : undefined}
              continueBtn={continueBtn}
            />
          )}

          {page === 2 && (
            <Buttons
              isContinue
              text="Submit"
              finish={finish}
              continueBtn={continueBtn}
            />
          )}
        </div>
      </div>
    </div>
  );
}
