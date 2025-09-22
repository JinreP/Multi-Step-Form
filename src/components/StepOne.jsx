export function Step1(props) {
  const { data, setData } = props;

  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        value={data.FirstName}
        onChange={(event) =>
          setData({ ...data, FirstName: event.target.value })
        }
        placeholder="Enter Your First Name"
      />
      <input
        type="text"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        onChange={(event) => setData({ ...data, LastName: event.target.value })}
        value={data.LastName}
        placeholder="Enter Your Last Name"
      />
      <input
        type="text"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        value={data.username}
        onChange={(event) => setData({ ...data, username: event.target.value })}
        placeholder="Enter Your Username"
      />
    </div>
  );
}
