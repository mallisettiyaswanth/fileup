"use client";
import { Button } from "@/components/shadcn/button";
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/shadcn/dialog";

type Props = {
  name: string;
  desc?: string;
  value: React.ReactNode;
  mutateFn?: () => void;
  triggerFn?: () => void;
  buttonName?: string;
  disabled?: boolean;
  triggerContent?: React.ReactNode;
};

const SettingsTab = ({
  name,
  desc,
  value,
  mutateFn,
  triggerFn,
  buttonName = "Edit",
  disabled = false,
  triggerContent,
}: Props) => {
  return (
    <div className="flex justify-between p-5 border-b">
      <div>
        <h1 className="text-lg">{name}</h1>
        <p className="text-sm text-white/60">{desc}</p>
      </div>
      {value}
      {triggerFn ? (
        <Dialog>
          <DialogTrigger>
            <Button
              disabled={disabled}
              variant="outline"
              className="border-primary rounded-full"
            >
              {buttonName}
            </Button>
          </DialogTrigger>
          <DialogContent>{triggerContent}</DialogContent>
        </Dialog>
      ) : (
        <Button
          disabled={disabled}
          variant="outline"
          className="border-primary rounded-full"
          onClick={mutateFn}
        >
          {buttonName}
        </Button>
      )}
    </div>
  );
};

export default SettingsTab;
