import Image from "next/image";
import React from "react";

type ContactsProps = {
  name: string;
  src: string;
  online?: boolean;
};

function Contacts({ name, src, online }: ContactsProps) {
  return (
    <div className="relative flex items-center space-x-2 py-2 pl-1 rounded-l-xl hover:bg-gray-200 cursor-pointer">
      <div className="w-10 h-10 relative">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          alt="Profile image"
        />
      </div>
      <p className="sm:inline-flex text-sm">{name}</p>
      {online ? (
        <div className="absolute bg-green-500 h-4 w-4 rounded-full left-5 bottom-2 border-2"></div>
      ) : (
        <div className="absolute bg-gray-500 h-4 w-4 rounded-full left-5 bottom-2 border-2"></div>
      )}
    </div>
  );
}

export default Contacts;
