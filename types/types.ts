import { z } from 'zod';
export const CreatePlantFormSchema = z.object({
  name: z.string().min(2).max(200),
});
