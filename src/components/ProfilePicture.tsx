import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import defaultProfileImage from "../../public/user-286-256.png";

type ProfilePictureProps = {
  useSignOut?: boolean;
};

function ProfilePicture({ useSignOut }: ProfilePictureProps) {
  const { data: session } = useSession();

  const handleSignOut = () => {
    if (useSignOut) {
      signOut();
    }
  };

  return (
    <Image
      onClick={handleSignOut}
      src={session?.user?.image || defaultProfileImage}
      alt="Profile image"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}

export default ProfilePicture;
