'use client';
import Container from '@/components/layout/Container';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CreatePlantFormSchema } from '@/types/types';
import { EditPlant, createPlant } from '@/actions/plantActions';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Plant } from '@prisma/client';

interface Props {
  plant: Plant | null;
}

function PlantForm({ plant }: Props) {
  const router = useRouter();
  const form = useForm<z.infer<typeof CreatePlantFormSchema>>({
    resolver: zodResolver(CreatePlantFormSchema),
    defaultValues: {
      name: plant?.name || '',
    },
  });

  const createPlantMutation = useMutation({
    mutationFn: async (values: z.infer<typeof CreatePlantFormSchema>) => createPlant(values),
    onSuccess: (data) => {
      router.push('/dashboard/plant/' + data.id);
      form.reset();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const editPlantMutation = useMutation({
    mutationFn: async (values: z.infer<typeof CreatePlantFormSchema>) => await EditPlant(plant!.id, values),
    onSuccess: (data) => {
      router.push('/dashboard/plant/' + data?.id);
      router.refresh();
      form.reset();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const action = plant ? 'تعديل' : 'انشاء محطة';

  async function onSubmit(values: z.infer<typeof CreatePlantFormSchema>) {
    if (!plant) {
      createPlantMutation.mutate(values);
    } else {
      editPlantMutation.mutate(values);
    }
  }
  return (
    <Container>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="max-w-screen-sm">
                <FormLabel>اسم المحطة</FormLabel>
                <FormControl>
                  <Input placeholder="اسم المحطة" {...field} />
                </FormControl>
                <FormDescription>هذا سيكون اسم المحطة</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={createPlantMutation.isPending}>
            {action}
          </Button>
          {createPlantMutation.isError && <p>Something went wrong</p>}
        </form>
      </Form>
    </Container>
  );
}

export default PlantForm;
