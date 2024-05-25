import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Asphalt Plant Material & Production Management',
  description:
    'Streamline the management of materials and products at your asphalt plant with our comprehensive application, designed to enhance efficiency and productivity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
