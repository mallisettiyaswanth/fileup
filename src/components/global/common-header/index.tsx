import React from "react";
import UploadButton from "@/components/global/buttons/upload-button";
import FilterButton from "@/components/global/buttons/sort-button";
import SortButton from "@/components/global/buttons/filter-buttons";
import SearchBar from "@/components/global/search-bar";

type Props = {};

const CommonHeader = (props: Props) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-2">
        <UploadButton />
        <FilterButton />
        <SortButton />
      </div>
      <SearchBar placeholder="search for documents" className="rounded-xl" />
    </div>
  );
};

export default CommonHeader;
