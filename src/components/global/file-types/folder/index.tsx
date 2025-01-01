import { Card } from "@/components/ui/card";
import { Icons } from "@/lib/constants";

const Folder = ({
  folder,
}: {
  folder: {
    name: string;
    created: string;
    files: number;
    folderType: string;
    type: string;
  };
}) => {
  return (
    <Card className="bg-gray-100 cursor-pointer rounded-lg border-0 flex flex-col gap-3">
      <div className="w-full flex items-center justify-between">
        <Icons.folder.filled className="text-primary h-6 w-6" />
        <Icons.more.filled className="text-primary h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <h1>{folder.name}</h1>
        <div className="flex items-center justify-between text-xs text-gray-600">
          <h1>Created {folder.created}</h1>
          <span className="flex items-center">
            <Icons.dot.filled />
            {folder.files} files
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Folder;
