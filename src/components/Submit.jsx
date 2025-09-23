export function Submitted() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="w-[480px] h-[193px]">
        <img
          src="./logo.png"
          alt="logo"
          className="w-[50px] h-[50px] bg-contain"
        />
        <div className="flex flex-col items-start justify-start">
          <h3>You're All Set 🔥</h3>
          <p>We have received your submission. Thank you!</p>
        </div>
      </div>
    </div>
  );
}
