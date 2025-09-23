export function Step2(props) {
  const { data, setData } = props;

  let error = "";
  if (!data.email) {
    error = "Email is required";
  }

  return (
    <div className="flex flex-col gap-5 items-start justify-start">
      <label htmlFor="">Email *</label>
      <input
        type="text"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      {error && <span className="text-red-500 text-sm mt-2">{error}</span>}

      <label htmlFor="">Phone number *</label>
      <input
        type="number"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Phone Number"
        value={data.number}
        onChange={(e) => setData({ ...data, number: e.target.value })}
      />
    
      <label htmlFor="">Password *</label>
      <input
        type="password"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Enter Your Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <label htmlFor="">Password confirm *</label>
      <input
        type="password"
        className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
        placeholder="Confirm You're Password"
        value={data.confirmPass}
        onChange={(e) => setData({ ...data, confirmPass: e.target.value })}
      />
    </div>
  );
}
