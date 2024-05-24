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

function MainNav() {
  const pathname = usePathname();
  const routes: IRoute[] = [
    {
      href: `/plants`,
      label: 'Overview',
      active: pathname === `/plants`,
    },
    {
      href: `/dashboard`,
      label: 'Dashboard',
      active: pathname === `/dashboard`,
    },
  ];
  return (
    <div>
      <ul className="flex items-center gap-x-4 py-4 md:py-6">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn('text-muted-foreground', route.active && 'text-secondary-foreground')}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainNav;
