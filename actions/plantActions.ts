'use server';

import db from '@/prisma/db';
import { CreatePlantFormSchema } from '@/types/types';
import { z } from 'zod';

export async function createPlant(values: z.infer<typeof CreatePlantFormSchema>) {
  const newPlant = await db.plant.create({
    data: {
      name: values.name,
    },
  });
  return newPlant;
}

export async function EditPlant(plantId: string, values: z.infer<typeof CreatePlantFormSchema>) {
  const existingPlant = await db.plant.findFirst({
    where: {
      id: plantId,
    },
  });

  if (!existingPlant) {
    return null;
  }
  const updatedPlant = await db.plant.update({
    where: {
      id: existingPlant.id,
    },
    data: {
      name: values.name,
    },
  });
  return updatedPlant;
}

export async function deletePlant(plantId: string) {
  await db.plant.delete({
    where: {
      id: plantId,
    },
  });
}
