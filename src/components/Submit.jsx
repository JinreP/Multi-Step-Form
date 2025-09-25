export function Submitted() {
  return (
      <div className="w-[480px] h-[193px] border-2 bg-white rounded-2xl">
        <img
          src="./logo.png"
          alt="logo"
          className="w-[60px] h-[60px] bg-contain"
        />
        <div className="flex flex-col items-start  justify-start">
          <h3 className="font-bold text-3xl">You're All Set 🔥</h3>
          <p className="text-2xl text-gray-500">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
  );
}
