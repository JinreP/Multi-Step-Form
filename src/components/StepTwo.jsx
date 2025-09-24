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
    prevBtn,
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
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
          setErrors({ ...errors, email: null });
        }}
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
        onChange={(e) => {
          setData({ ...data, number: e.target.value });
          setErrors({ ...errors, number: null });
        }}
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
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
          setErrors({ ...errors, password: null });
        }}
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
        onChange={(e) => {
          setData({ ...data, confirmPass: e.target.value });
          setErrors({ ...errors, confirmPass: null });
        }}
      />
      {errors.confirmPass && (
        <p className="text-red-600">{errors.confirmPass}</p>
      )}
    </form>
  );
}
