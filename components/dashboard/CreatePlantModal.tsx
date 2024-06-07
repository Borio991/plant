import { CommandItem } from '@/components/ui/command';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';

function CreatePlantModal() {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <CommandItem>
          <div className="flex items-center gap-x-2 flex-1 ">
            <span className="font-bold">انشاء محطة جديدة</span>
            <PlusCircle className="w-5 h-5" />
          </div>
        </CommandItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CreatePlantModal;
