export function Buttons(props) {
  const { page, setPage, data, setData } = props;
  return (
    <div className="flex gap-10 justify-center items-center">
      {" "}
      {page > 0 && (
        <button
          onClick={() => setPage(page - 1)}
          className="w-[100px] h-[50px] bg-red-500"
        >
          Prev{" "}
        </button>
      )}
      {page === 0 && (
        <button
          onClick={() => setPage(page + 1)}
          className="w-[100px] h-[50px] bg-red-500"
        >
          Continue 1/3{" "}
        </button>
      )}
      {page === 1 && (
        <button
          onClick={() => setPage(page + 1)}
          className="w-[100px] h-[50px] bg-red-500"
        >
          Continue 2/3{" "}
        </button>
      )}
      {page === 2 && (
        <button
          className="w-[100px] h-[50px] bg-red-500"
          onClick={() => {
            if (page === 2) {
              alert("Done");
              console.log(data);
            } else {
              setPage(page + 1);
            }
          }}
        >
          Submit{" "}
        </button>
      )}
    </div>
  );
}
