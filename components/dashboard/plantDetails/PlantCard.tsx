'use client';
import { EditPlant, deletePlant } from '@/actions/plantActions';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Plant } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  data: Plant;
}

function PlantCard({ data }: Props) {
  const router = useRouter();

  const DeletePlantMutation = useMutation({
    mutationFn: async (id: string) => deletePlant(id),
    onSuccess: () => {
      router.push('/dashboard');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const EditPlantMutation = useMutation({
    mutationFn: async (id: string) => EditPlant(id),
    onSuccess: () => {
      router.push('/dashboard/plant/create/' + data.id);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{data?.name}</CardTitle>
        <CardDescription>محطة اسفلت اسيوط سعة 160 طن / ساعة</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-x-8">
          <Button
            variant={'destructive'}
            onClick={() => DeletePlantMutation.mutate(data?.id)}
            disabled={DeletePlantMutation.isPending}
          >
            Delete
          </Button>
          <Button
            variant={'outline'}
            onClick={() => EditPlantMutation.mutate(data.id)}
            disabled={EditPlantMutation.isPending}
          >
            Update
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p></p>
      </CardFooter>
    </Card>
  );
}

export default PlantCard;
