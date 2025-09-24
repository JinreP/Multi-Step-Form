import { Buttons } from "./Buttons";
export function Step2(props) {
  const {
    data,
    setData,
    submit,
    validation,
    errors,
    setErrors,
    page,
    setPage,
    continueBtn,
    setIndex,
    index,
    text,
    isContinue,
    totalPages,
  } = props;

  return (
    <form
      onSubmit={validation}
      className="flex flex-col gap-5 items-start justify-start"
    >
      <label htmlFor="email">Email *</label>
      <input
        type="text"
        name="email"
        id="email"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      {errors.email && <p className="text-red-600">{errors.email}</p>}
      <label htmlFor="number">Phone number *</label>
      <input
        type="number"
        id="number"
        name="number"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Phone Number"
        value={data.number}
        onChange={(e) => setData({ ...data, number: e.target.value })}
      />
      {errors.number && <p className="text-red-600">{errors.number}</p>}
      <label htmlFor="password">Password *</label>
      <input
        type="password"
        name="password"
        id="password"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      {errors.password && <p className="text-red-600">{errors.password}</p>}
      <label htmlFor="confirmPass">Password confirm *</label>
      <input
        type="password"
        id="confirmPass"
        name="confirmPass"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Confirm You're Password"
        value={data.confirmPass}
        onChange={(e) => setData({ ...data, confirmPass: e.target.value })}
      />
      {errors.confirmPass && (
        <p className="text-red-600">{errors.confirmPass}</p>
      )}

      <div className="flex gap-10">
        <Buttons
          page={page}
          setPage={setPage}
          data={data}
          setData={setData}
          validation={validation}
          errors={errors}
          setErrors={setErrors}
          isContinue={true}
          setIndex={setIndex}
          text={"Continue"}
          index={index}
          continueBtn={continueBtn}
        />
      </div>
    </form>
  );
}

// data.password !== data.confirmPass
//         ? (passError2 = "Password is not matching!!")
//         : "" || data.confirmPass === ""
//         ? (passError2 = "Confirm you're password")
//         : "Make" &&
