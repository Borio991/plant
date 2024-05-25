import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en" className="dark">
      <body className="rtl">{children}</body>
    </html>
  );
}
