import Container from '@/components/layout/Container';
import db from '@/prisma/db';
import PlantCard from '@/components/dashboard/plantDetails/PlantCard';
import Link from 'next/link';

interface Props {
  params: {
    plantId: string;
  };
}

async function PlantDetailsPage({ params }: Props) {
  const plant = await db.plant.findFirst({
    where: {
      id: params.plantId,
    },
  });

  if (!plant) {
    return (
      <Container>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">محطة</h1>
          <p className="text-lg">لا يوجد محطات</p>
          <Link href={'dashboard/plant/create/new'}>انشئ محطة</Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PlantCard data={plant} />
      </div>
    </Container>
  );
}

export default PlantDetailsPage;
