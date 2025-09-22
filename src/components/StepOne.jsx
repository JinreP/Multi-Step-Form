export function Step1(props) {
  const { data, setData } = props;
  return (
    <div className="flex flex-col gap-5 items-start justify-start">
      <label htmlFor="">First name *</label>
      <input
        type="text"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        value={data.FirstName}
        onChange={(event) =>
          setData({ ...data, FirstName: event.target.value })
        }
        placeholder="Enter Your First Name"
      />{" "}
      <label htmlFor="">Last name *</label>
      <input
        type="text"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        value={data.LastName}
        onChange={(event) => setData({ ...data, LastName: event.target.value })}
        placeholder="Enter Your Last Name"
      />{" "}
      <label htmlFor="">Username *</label>
      <input
        type="text"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        value={data.Username}
        onChange={(event) => setData({ ...data, Username: event.target.value })}
        placeholder="Enter Your Username"
      />
    </div>
  );
}
