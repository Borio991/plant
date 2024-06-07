import Container from '@/components/layout/Container';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  return (
    <Container>
      <Link href="/dashboard" className={buttonVariants({ variant: 'secondary' })}>
        Dashboard
      </Link>
    </Container>
  );
}
