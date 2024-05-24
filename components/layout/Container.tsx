import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

function Container({ className, children }: Props) {
  return <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

export default Container;
