import { useSession } from "next-auth/react";
import React from "react";

type UsernameProps = {
  command?: string;
};

function Username({ command }: UsernameProps): string {
  const { data: session } = useSession();

  if (command === "name") {
    return session?.user?.name?.split(" ")[0] || "";
  }
  return session?.user?.name || "";
}

export default Username;
