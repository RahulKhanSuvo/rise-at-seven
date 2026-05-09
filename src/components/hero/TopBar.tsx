import Button from "@/common/Button";

export default function TopBar() {
  return (
    <div className=" w-full  rounded-3xl p-2">
      <Button
        text="🚨 The Category Leaderboard - Live Now"
        href="#"
        variant="solid"
        className="bg-primary w-full py-1 border-none"
      />
    </div>
  );
}
