'use server';

import db from '@/prisma/db';
import { CreatePlantFormSchema } from '@/types/types';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function createPlant(values: z.infer<typeof CreatePlantFormSchema>) {
  const newPlant = await db.plant.create({
    data: {
      name: values.name,
    },
  });
  return newPlant;
}

export async function EditPlant(plantId: string) {
  const existingPlant = await db.plant.findFirst({
    where: {
      id: plantId,
    },
  });
  if (!existingPlant) {
    return NextResponse.json({
      status: 404,
      body: {
        message: 'Plant not found',
      },
    });
  }
  return await db.plant.update({
    where: {
      id: existingPlant.id,
    },
    data: {
      name: existingPlant.name,
    },
  });
}

export async function deletePlant(plantId: string) {
  await db.plant.delete({
    where: {
      id: plantId,
    },
  });
}
