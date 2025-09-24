export function Step1(props) {
  const { data, setData, page, setPage, errors, setErrors, submit } = props;

  return (
    <div className="">
      <form
        onSubmit={submit}
        className="flex flex-col justify-start items-start"
      >
        <label htmlFor="FirstName">First name *</label>
        <input
          type="text"
          id="FirstName"
          name="FirstName"
          className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
          value={data.FirstName}
          onChange={(event) =>
            setData({ ...data, FirstName: event.target.value })
          }
          placeholder="Enter Your First Name"
        />{" "}
        {errors.FirstName && <p className="text-red-600">{errors.FirstName}</p>}
        <label htmlFor="LastName">Last name *</label>
        <input
          type="text"
          id="LastName"
          name="LastName"
          className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
          value={data.LastName}
          onChange={(event) =>
            setData({ ...data, LastName: event.target.value })
          }
          placeholder="Enter Your Last Name"
        />{" "}
        {errors.LastName && <p className="text-red-600">{errors.LastName}</p>}
        <label htmlFor="Username">Username *</label>
        <input
          type="text"
          id="Username"
          name="Username"
          className="w-[300px] h-[50px] text-black focus:border-blue-500 border-blue-500 "
          value={data.Username}
          onChange={(event) =>
            setData({ ...data, Username: event.target.value })
          }
          placeholder="Enter Your Username"
        />
        {errors.Username && <p className="text-red-600">{errors.Username}</p>}
      </form>
    </div>
  );
}

