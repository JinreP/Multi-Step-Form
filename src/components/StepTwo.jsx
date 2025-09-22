export function Step2() {
  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Email"
      />
      <input
        type="number"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Phone Number"
      />
      <input
        type="password"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Password"
      />
      <input
        type="password"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Confirm You're Password"
      />
    </div>
  );
}
