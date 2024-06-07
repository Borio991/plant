'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, Factory, PlusCircle } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Plant } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  items: Plant[];
}

export default function ComboboxDemo({ items }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="min-w-[250px] justify-start">
          <ChevronsUpDown className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <div className="mr-2">{value ? items.find((item) => item.name === value)?.name : 'اختر محطة'}</div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[250px] p-0">
        <Command>
          <CommandInput placeholder="بحث" />
          <CommandEmpty>لا يوجد محطات</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {items.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                    router.push(`/dashboard/plant/${item.id}`);
                  }}
                  className="flex items-center  gap-x-2 "
                >
                  <Factory size={15} className="h-4 w-4" />
                  {item.name}
                  <Check className={cn('mr-2 h-4 w-4', value === item.name ? 'opacity-100' : 'opacity-0')} />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem onSelect={() => setOpen(false)}>
                <Link href="/dashboard/plant/create/new-plant-create" className="flex items-center gap-x-2 flex-1 ">
                  <span className="font-bold">انشاء محطة جديدة</span>
                  <PlusCircle className="w-5 h-5" />
                </Link>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
