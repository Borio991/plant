import PlantForm from '@/components/dashboard/plantDetails/PlantForm';
import db from '@/prisma/db';

interface Props {
  params: {
    plantId: string;
  };
}

async function CreatePlantPage({ params }: Props) {
  const plant = await db.plant.findFirst({
    where: {
      id: params.plantId,
    },
  });
  return <PlantForm plant={plant} />;
}

export default CreatePlantPage;
