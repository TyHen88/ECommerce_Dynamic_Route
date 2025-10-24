
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 
  return (
    <article className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Blog Post: {slug}</h1>
      <div className="prose lg:prose-xl">
        <p>This is a dynamic blog post page. The content would typically be fetched based on the slug: {(await params).slug}</p>
      </div>
    </article>
  );
}