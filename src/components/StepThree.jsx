import { Buttons } from "./Buttons";

export function Step3(props) {
  const {
    data,
    setData,

    errors,

    finish,
  } = props;
  return (
    <div>
      {" "}
      <form
        onSubmit={finish}
        className="flex flex-col gap-5 items-start justify-start"
      >
        <label htmlFor="Date" className="text-black">
          Date of birth *
        </label>
        <input
          type="date"
          id="Date"
          name="Date"
          className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
          placeholder="Date of birth"
          value={data.date}
          onChange={(e) => setData({ ...data, date: e.target.value })}
        />
        {errors.date && <p className="text-red-600">{errors.date}</p>}
        <label htmlFor="file" className="">
          Profile image *
        </label>
        <input
          type="file"
          name="file"
          id="file"
          className="w-[350px] border-2 h-[130px] text-black text-center font-bold"
        />
      </form>
    </div>
  );
}
