import { Submitted } from "./Submit";
import Link from "next/link";
export function Buttons(props) {
  const { page, setPage, data, setData, errors, setErrors } = props;
  return (
    <div className="flex gap-10 justify-center items-center">
      {" "}
      {page === 0 && (
        <button className="w-[120px] rounded-[10px] h-[50px] bg-gray-100 text-black font-bold">
          Prev{" "}
        </button>
      )}
      {page > 0 && page < 3 && (
        <button
          onClick={() => setPage(page - 1)}
          className="w-[120px] rounded-[10px] h-[50px] bg-gray-300 text-black font-bold"
        >
          Prev{" "}
        </button>
      )}
      {page === 1 && (
        <button
          onClick={() => setPage(page + 1)}
          className="w-[200px] rounded-[10px] h-[50px] bg-black text-white font-bold"
        >
          Continue 2/3{" "}
        </button>
      )}
      {page === 2 && (
        <button
          className="w-[200px] rounded-[10px] h-[50px] bg-black text-white font-bold"
          onClick={() => setPage(page + 1)}
        >
          Submit 3/3
        </button>
      )}
      {page === 3 && <Submitted />}
    </div>
  );
}
