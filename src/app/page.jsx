"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Step1 } from "../components/StepOne";
import { Step2 } from "../components/StepTwo";
import { Step3 } from "../components/StepThree";
import { Submitted } from "@/components/Submit";
import { Buttons } from "../components/Buttons";
import { MyStorage } from "@/components/Storage";

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
    file: null,
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
    file: null,
  });

  const submit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (data.FirstName.length === 0) {
      newErrors.FirstName = "First name is required";
    } else if (data.FirstName.length < 3) {
      newErrors.FirstName = "First name is too short";
    }
    if (data.LastName.length === 0) {
      newErrors.LastName = "Last name is required";
    } else if (data.LastName.length < 3) {
      newErrors.LastName = "Last name is too short";
    }

    if (data.Username.length === 0) {
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
      newErrors.email = "Email is required";
    } else if (!data.email.includes("@") || !data.email.includes(".")) {
      newErrors.email = "Please provide a valid email address.";
    }
    if (data.number.length === 0) {
      newErrors.number = "Phone number is required";
    } else if (data.number.length > 8) {
      newErrors.number = "Please enter a valid phone number.";
    }
    if (data.password.length === 0) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 8) {
      newErrors.password = "Weak password";
    }

    if (data.password !== data.confirmPass) {
      newErrors.confirmPass = "Passwords do not match. Please try again.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setPage(page + 1);
      setIndex(index + 1);
    }
  };
  const finish = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!data.date || data.date.trim() === "") {
      newErrors.date = "Please select a date.";
    }
    const birthDate = new Date(data.date);
    const birthYear = birthDate.getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (age > 100) {
      newErrors.date = "Age must be less than or equal to 100 years";
    } else if (age < 6) {
      newErrors.date = "Too young to visit this site";
    }

    if (!data.file) {
      newErrors.file = "Image cannot be blank";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log(data);
      setPage(page + 1);
      setIndex(index + 1);
    }
  };
  //   let newErrors = {};
  // };

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
      <MyStorage data={data} setData={setData} />
      <div className="flex text-center flex-col gap-3 w-[400px] h-[600px] ">
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
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {currentPage(page)}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-5">
          {page > 0 && page < 3 && (
            <Buttons isContinue={false} text="Prev" prevBtn={prevBtn} />
          )}

          {page < 2 && (
            <Buttons
              isContinue
              index={index}
              text={`Continue`}
              keyboard={keyboard}
              submit={page === 0 ? submit : undefined}
              validation={page === 1 ? validation : undefined}
              continueBtn={continueBtn}
            />
          )}

          {page === 2 && (
            <Buttons
              isContinue
              text="Submit"
              index={index}
              finish={finish}
              continueBtn={continueBtn}
            />
          )}
        </div>
      </div>
    </div>
  );
}
