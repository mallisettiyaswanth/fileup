import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DetailedHTMLProps,
  Dispatch,
  ImgHTMLAttributes,
  SetStateAction,
} from "react";

export default function ZoomableImage({
  img,
  dialogOpen,
  setDialogOpen,
}: {
  img: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  dialogOpen: boolean;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
  if (!img.src) return null;
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <img
          src={img.src}
          alt={img.alt}
          className="rounded-2xl w-full h-52 object-cover shadow-sm"
        />
      </DialogTrigger>
      <DialogContent className="w-fit h-fit flex items-center justify-center  bg-transparent border-none py-10 shadow-none">
        <img src={img.src} alt={img.alt} className="rounded-2xl" />
      </DialogContent>
    </Dialog>
  );
}
