"use client";

import { useState, useEffect } from "react";

export function Storage(props) {
  const { data, setData } = props;
  useEffect(() => {
    const localStorageFirstName = localStorage.getItem("FirstName");
    if (localStorageFirstName) {
      setData((prev) => ({ ...prev, FirstName: localStorageFirstName }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("FirstName", data.FirstName);
  }, [data.FirstName]);

  useEffect(() => {
    const localStorageLastName = localStorage.getItem("LastName");
    if (localStorageLastName) {
      setData((prev) => ({ ...prev, LastName: localStorageLastName }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("LastName", data.LastName);
  }, [data.LastName]);

  useEffect(() => {
    const Username = localStorage.getItem("Username");
    if (Username) {
      setData((prev) => ({ ...prev, Username: Username }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("Username", data.Username);
  }, [data.Username]);

  useEffect(() => {
    const localStorageEmail = localStorage.getItem("email");
    if (localStorageEmail) {
      setData((prev) => ({ ...prev, email: localStorageEmail }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("email", data.email);
  }, [data.email]);

  useEffect(() => {
    const localStorageNumber = localStorage.getItem("number");
    if (localStorageNumber) {
      setData((prev) => ({ ...prev, number: localStorageNumber }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("number", data.number);
  }, [data.number]);

  useEffect(() => {
    const localStoragePassword = localStorage.getItem("password");
    if (localStoragePassword) {
      setData((prev) => ({ ...prev, password: localStoragePassword }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("password", data.password);
  }, [data.password]);

  useEffect(() => {
    const localStoragePassConfirm = localStorage.getItem("confirmPass");
    if (localStoragePassConfirm) {
      setData((prev) => ({ ...prev, confirmPass: localStoragePassConfirm }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("confirmPass", data.confirmPass);
  }, [data.confirmPass]);

  useEffect(() => {
    const localStorageDate = localStorage.getItem("date");
    if (localStorageDate) {
      setData((prev) => ({ ...prev, date: localStorageDate }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("date", data.date);
  }, [data.date]);
  return;
}
