"use client";
import { useSession, signIn, signOut } from "next-auth/react";
const LoginUser = () => {
  const { data: sesssion } = useSession();

  const handleSign = async () => {
    await signIn("google");
  };

  if (!sesssion) {
    return (
      <button
        onClick={handleSign}
        className="bg-[#5c9960] font-bold py-3 px-6 tracking-widest"
      >
        Login With Google
      </button>
    );
  }

  return <div className="user">
    {sesssion.user.email}
    <button onClick={() => signOut()}>Sign out</button>
    </div>;
};

export default LoginUser;


