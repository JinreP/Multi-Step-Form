import { Submitted } from "./Submit";
import Link from "next/link";
export function Buttons(props) {
  const {
    page,
    setPage,
    data,
    setData,
    errors,
    setErrors,
    prevBtn,
    keyboard,
    continueBtn,
    setIndex,
    index,
    validation,
    text,
    finish,
    isContinue,
    submit,
    TEST,
    totalPages,
  } = props;

  if (isContinue) {
    return (
      <button
        type="submit"
        onKeyDown={keyboard}
        className="w-[150px] rounded-[10px] h-[50px] bg-black text-white font-bold"
        onClick={(e) => {
          if (finish) return finish(e);
          if (validation) return validation(e);
          if (submit) return submit(e);
          if (continueBtn) return continueBtn();
        }}
      >
        <div className="flex  gap-1 pl-6 text-center">
          <p>{text}</p>
          <p>{index}/3</p>
        </div>
      </button>
    );
  }

  return (
    <div className="flex gap-10 justify-center items-center">
      <button
        className="w-[120px] rounded-[10px] h-[50px] bg-gray-300  text-black font-bold"
        onClick={prevBtn}
      >
        {text}
      </button>
    </div>
  );
}
