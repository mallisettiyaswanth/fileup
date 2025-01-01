"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/lib/constants";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

type FileRecord = {
  fileName: string;
  fileType: "document" | "audio" | "video" | "image" | "other";
  ownerName: string;
  dateCreated: string;
  lastUpdated: string;
  fileSize: number;
};

const columns: ColumnDef<FileRecord>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fileName",
    header: "Name",
    cell: ({ row }) => {
      const Icon = Icons[row.original.fileType].filled;
      return (
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center p-2 border shadow-sm rounded-md text-primary">
            <Icon />
          </div>
          <span>{row.original.fileName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "fileSize",
    header: "Size",
  },
  {
    accessorKey: "ownerName",
    header: "Owner",
  },
  {
    accessorKey: "dateCreated",
    header: "Date Created",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Icons.more.outline />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
            // onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
const data: FileRecord[] = [
  {
    fileName: "Project_Plan.docx",
    fileType: "document",
    fileSize: 1.5,
    ownerName: "Alice Johnson",
    dateCreated: "2024-01-15",
    lastUpdated: "2024-02-10",
  },
  {
    fileName: "Vacation_Photo.jpg",
    fileType: "image",
    fileSize: 2.3,
    ownerName: "Bob Smith",
    dateCreated: "2023-12-20",
    lastUpdated: "2023-12-22",
  },
  {
    fileName: "Meeting_Audio.mp3",
    fileType: "audio",
    fileSize: 5.8,
    ownerName: "Catherine Lee",
    dateCreated: "2024-01-10",
    lastUpdated: "2024-01-10",
  },
  {
    fileName: "Marketing_Video.mp4",
    fileType: "video",
    fileSize: 250.4,
    ownerName: "David Wright",
    dateCreated: "2023-11-05",
    lastUpdated: "2023-11-10",
  },
  {
    fileName: "Invoice_2024.pdf",
    fileType: "document",
    fileSize: 0.8,
    ownerName: "Emma Brown",
    dateCreated: "2024-01-01",
    lastUpdated: "2024-01-02",
  },
  {
    fileName: "Team_Photo.png",
    fileType: "image",
    fileSize: 1.2,
    ownerName: "Frank Green",
    dateCreated: "2023-12-15",
    lastUpdated: "2023-12-16",
  },
  {
    fileName: "Background_Music.wav",
    fileType: "audio",
    fileSize: 15.7,
    ownerName: "Grace Taylor",
    dateCreated: "2023-12-30",
    lastUpdated: "2023-12-31",
  },
  {
    fileName: "Tutorial.mp4",
    fileType: "video",
    fileSize: 320.1,
    ownerName: "Henry White",
    dateCreated: "2023-12-01",
    lastUpdated: "2023-12-05",
  },
  {
    fileName: "Product_Manual.docx",
    fileType: "document",
    fileSize: 2.0,
    ownerName: "Ivy Clark",
    dateCreated: "2024-01-20",
    lastUpdated: "2024-02-01",
  },
  {
    fileName: "Landscape.jpeg",
    fileType: "image",
    fileSize: 3.4,
    ownerName: "Jack Hill",
    dateCreated: "2024-01-25",
    lastUpdated: "2024-01-28",
  },
  {
    fileName: "Podcast_Episode.mp3",
    fileType: "audio",
    fileSize: 28.5,
    ownerName: "Karen Scott",
    dateCreated: "2024-02-05",
    lastUpdated: "2024-02-06",
  },
  {
    fileName: "Presentation_Video.mov",
    fileType: "video",
    fileSize: 450.3,
    ownerName: "Liam King",
    dateCreated: "2023-10-20",
    lastUpdated: "2023-11-01",
  },
  {
    fileName: "Financial_Report.xlsx",
    fileType: "document",
    fileSize: 1.7,
    ownerName: "Mia Perez",
    dateCreated: "2024-01-10",
    lastUpdated: "2024-01-15",
  },
];

export default function DemoDataTable() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
