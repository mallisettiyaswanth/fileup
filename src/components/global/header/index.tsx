import { Icons } from "@/lib/constants";
import React from "react";

type Props = {
  icon: string;
  slug: string;
};

const Header = ({ icon, slug }: Props) => {
  const IconComponent = Icons[icon as keyof typeof Icons];

  return (
    <div className="w-full p-5 flex items-center gap-2">
      {IconComponent ? (
        <IconComponent className="w-8 h-8 text-primary " />
      ) : (
        <p>Icon not found</p>
      )}
      <span className="text-2xl md:text-3xl bg-gradient-to-br from-white via-zinc-400 to-white inline-block bg-clip-text text-transparent">
        {slug}
      </span>
    </div>
  );
};

export default Header;
