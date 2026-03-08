interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // Content will be loaded from the shared data layer in a later step.
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Blog
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-4 text-sm text-zinc-500">
          This post will be powered by the blog data layer.
        </p>
      </div>
    </div>
  );
}

