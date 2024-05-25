'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type IRoute = {
  href: string;
  label: string;
  active: boolean;
};

function DashboardMainNav() {
  const pathname = usePathname();
  const routes: IRoute[] = [
    {
      href: `/dashboard/overview`,
      label: 'ملخص',
      active: pathname === `/dashboard/overview`,
    },
    {
      href: `/dashboard/materials`,
      label: 'الخامات',
      active: pathname === `/dashboard/materials`,
    },
    {
      href: `/dashboard/products`,
      label: 'المنتجات',
      active: pathname === `/dashboard/products`,
    },
  ];
  return (
    <ul className="flex items-center gap-x-6">
      {routes.map((route) => (
        <li key={route.href}>
          <Link href={route.href} className={cn('text-muted-foreground', route.active && 'text-secondary-foreground')}>
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DashboardMainNav;
