import { Buttons } from "./Buttons";

export function Step3(props) {
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
    finish,
    isContinue,
    totalPages,
  } = props;
  return (
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

      {page > 1 ? (
        <div className="flex gap-10">
          {" "}
          <Buttons
            page={page}
            submit={submit}
            setPage={setPage}
            data={data}
            setData={setData}
            errors={errors}
            setErrors={setErrors}
            isContinue={false}
            text={"Prev"}
            prevBtn={prevBtn}
          />
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
            text={"Submit"}
            index={index}
            continueBtn={continueBtn}
          />{" "}
        </div>
      ) : (
        ""
      )}
    </form>
  );
}
