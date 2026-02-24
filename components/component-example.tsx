import { SettingsIcon } from "@/cli/dist/filled";
import { HomeIcon } from "@/cli/dist/outline";
import { X } from "lucide-react";

export function ComponentExample() {
  return (
    <div className="font-machine">
      <HomeIcon size={32} />
      <SettingsIcon size={48} />
      <X size={24} />
    </div>
  );
}
