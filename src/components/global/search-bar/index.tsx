import { Input } from "@/components/ui/input";
import { Icons } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  placeholder: string;
  className?: string;
};

const SearchBar = ({ placeholder, className }: Props) => {
  return (
    <div
      className={cn(
        "border rounded-lg flex items-center px-3 hover:border-2 focus-within:border-2 hover:border-primary focus-within:border-primary transition-colors shadow-sm bg-white",
        className
      )}
    >
      <Icons.search.filled />
      <Input
        className="border-none outline-none shadow-none focus:ring-0 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
