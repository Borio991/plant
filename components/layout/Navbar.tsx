import Container from '@/components/layout/Container';
import MainNav from '@/components/layout/MainNav';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="border-b border-muted h-16">
      <Container className=" h-full flex items-center justify-between">
        <Link href="/">Logo</Link>
        <MainNav />
        <div>Login</div>
      </Container>
    </div>
  );
}

export default Navbar;
