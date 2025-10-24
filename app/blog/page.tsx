import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    { id: 1, title: 'Getting Started with Next.js', slug: 'getting-started-nextjs' },
    { id: 2, title: 'Understanding TypeScript', slug: 'understanding-typescript' },
    { id: 3, title: 'The Power of Dynamic Routing', slug: 'power-of-dynamic-routing' },
  ];

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="p-4 border rounded-lg hover:border-indigo-500 transition-colors"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2">Click to read more...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}