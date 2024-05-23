import db from '@/prisma/db';

export default async function Home() {
  const posts = await db.post.findMany({});
  return (
    <h1 className="text-3xl">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        );
      })}
    </h1>
  );
}
