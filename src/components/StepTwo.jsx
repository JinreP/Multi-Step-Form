export function Step2(props) {
  const { data, setData } = props;

  let error = "";
  let numberError = "";
  let passError = "";
  let passError2 = "";
  if (data.email === "") {
    error = "Email is required";
  } else if (!data.email.includes("@gmail.com")) {
    error = "Type you're real email!!";
  }
  if (data.number === "") {
    numberError = "Phone number is required";
  } else if (data.number.length > 8) {
    numberError = "type you're real phone number";
  }
  if (data.password === "") {
    passError = "Password is required";
  }
  if (data.confirmPass === "") {
    passError2 = "Confirm you're password";
  } else if (data.password !== "" && data.password === data.confirmPass) {
    passError2 = "Password matches";
  } else {
    passError2 = "Password is not matching !!";
  }

  return (
    <div className="flex flex-col gap-5 items-start justify-start">
      <label htmlFor="">Email *</label>
      <input
        type="text"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      {error && <span className="text-red-500 text-sm mt-2">{error}</span>}

      <label htmlFor="">Phone number *</label>
      <input
        type="number"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Phone Number"
        value={data.number}
        onChange={(e) => setData({ ...data, number: e.target.value })}
      />
      {numberError && (
        <span className="text-red-500 text-sm mt-2">{numberError}</span>
      )}

      <label htmlFor="">Password *</label>
      <input
        type="password"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      {passError && (
        <span className="text-red-500 text-sm mt-2">{passError}</span>
      )}
      <label htmlFor="">Password confirm *</label>
      <input
        type="password"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Confirm You're Password"
        value={data.confirmPass}
        onChange={(e) => setData({ ...data, confirmPass: e.target.value })}
      />
      {passError2 && (
        <span className="text-red-500 text-sm mt-2">{passError2}</span>
      )}
    </div>
  );
}

// data.password !== data.confirmPass
//         ? (passError2 = "Password is not matching!!")
//         : "" || data.confirmPass === ""
//         ? (passError2 = "Confirm you're password")
//         : "Make" &&
