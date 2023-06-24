import LoginUser from "@/components/LoginUser";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-full text-center">
          <LoginUser />
        </div>
      </div>
    </>
  );
}
