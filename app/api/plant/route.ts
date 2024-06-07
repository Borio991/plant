import db from '@/prisma/db';
import { CreatePlantFormSchema } from '@/types/types';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function POST(req: Request) {
  const body = (await req.json()) as z.infer<typeof CreatePlantFormSchema>;
  const bodyValidate = CreatePlantFormSchema.safeParse(body);
  if (!bodyValidate.success) {
    const { errors } = bodyValidate.error;

    return NextResponse.json({
      status: 400,
      body: {
        errors: errors,
      },
    });
  }

  const newPlant = await db.plant.create({
    data: {
      name: body.name,
    },
  });

  return NextResponse.json({ data: newPlant });
}
