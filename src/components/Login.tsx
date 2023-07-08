import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Login() {
  const handleSignIn = () => {
    signIn();
  };

  return (
    <div className="flex flex-col items-center mx-auto h-screen mt-10">
      <Image
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        height={240}
        width={240}
        alt="Facebook logo"
      />
      <a
        className="px-20 py-4 z-10 text-2xl cursor-pointer mt-4 bg-blue-500 rounded-md text-white"
        onClick={handleSignIn}
      >
        Login
      </a>
    </div>
  );
}

export default Login;
