export function Step3() {
  return (
    <div className="flex flex-col gap-5">
      <label htmlFor="" className="text-black">
        Date of birth *
      </label>
      <input
        type="date"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Date of birth"
      />
    </div>
  );
}
