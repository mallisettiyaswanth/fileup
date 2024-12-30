import { LucideIcon } from "lucide-react";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
  children: React.ReactNode;
  icon?: LucideIcon | IconType;
  title?: string;
  desc?: string;
};

const Header = ({ children, title, desc, icon }: Props) => {
  const Icon = icon;
  return (
    <div className="w-full flex items-center justify-between text-md">
      <div className="flex-1">
        <div className="flex gap-1 items-center">
          {Icon && <Icon className="text-primary" />}
          <h1>{title}</h1>
        </div>
        <p className="text-gray-600">{desc}</p>
      </div>
      {children}
    </div>
  );
};

export default Header;
