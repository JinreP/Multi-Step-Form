import { Buttons } from "./Buttons";

export function Step3(props) {
  const { data, setData, errors, setErrors, finish } = props;
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
          onChange={(e) => {
            setData({ ...data, date: e.target.value });
            setErrors({ ...errors, date: null });
          }}
        />
        {errors.date && <p className="text-red-600">{errors.date}</p>}
        <label htmlFor="file" className="">
          Profile image *
        </label>
        <div className="w-[350px] border-2 h-fit text-black text-center font-bold">
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={(e) => {
              const image = e.target.files[0];
              if (image) {
                setData({ ...data, file: image });
              }
              setErrors({ ...errors, file: null });
            }}
            className="filetype"
          />
          {data.file && (
            <img
              src={URL.createObjectURL(data.file)}
              alt="Preview"
              className="w-[350px] h-[300px] object-cover border rounded"
            />
          )}
        </div>

        {errors.file && <p className="text-red-600">{errors.file}</p>}
      </form>
    </div>
  );
}
