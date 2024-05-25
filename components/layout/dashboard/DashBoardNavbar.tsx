import Combobox from '@/components/dashboard/Combobox';
import DashboardMainNav from '@/components/dashboard/dashboard-main-nav';
import Container from '@/components/layout/Container';
import db from '@/prisma/db';
import React from 'react';

async function DashBoardNavbar() {
  const plants = await db.plant.findMany({});
  return (
    <div className="border-b border-muted h-16">
      <Container className=" h-full flex items-center gap-x-12">
        <Combobox items={plants} />
        <DashboardMainNav />
      </Container>
    </div>
  );
}

export default DashBoardNavbar;
