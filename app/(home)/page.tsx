import Container from '@/components/layout/Container';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import db from '@/prisma/db';
import Link from 'next/link';

export default async function Home() {
  const posts = await db.post.findMany({});
  return (
    <h1 className="text-3xl">
      {posts.map((post) => {
        return (
          <Container>
            <Link href="/dashboard" className={buttonVariants({ variant: 'secondary' })}>
              Dashboard
            </Link>
          </Container>
        );
      })}
    </h1>
  );
}
