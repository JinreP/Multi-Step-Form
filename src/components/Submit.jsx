export function Submitted() {
  return (
    <div className="w-[480px] h-[193px] border-2 flex flex-col items-start justify-start pl-2 bg-white rounded-2xl">
      <img
        src="./logo.png"
        alt="logo"
        className="w-[60px] mt-2 h-[60px] bg-contain"
      />
      <h3 className="font-bold text-3xl pl-1">You're All Set 🔥</h3>
      <p className="text-2xl text-gray-500">
        We have received your submission. Thank you!
      </p>
    </div>
  );
}
