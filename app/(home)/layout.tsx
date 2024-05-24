import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Asphalt Plant Material & Production Management',
  description:
    'Streamline the management of materials and products at your asphalt plant with our comprehensive application, designed to enhance efficiency and productivity.',
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen mt-4 md:mt-6 lg:mt-8">{children}</main>
    </div>
  );
}
