import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SanityDocument } from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";
import { PortableTextComponents } from '@portabletext/react'

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<SanityDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const fetchedPost = await client.fetch(POST_QUERY, { slug });
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-3xl p-8">Loading post...</div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto max-w-3xl p-8">Post not found</div>
    );
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

const components: PortableTextComponents = {
  block: {
    h2: ({children}) => <h2>{children}</h2>,
    normal: ({children}) => <p>{children}</p>,
  },
}

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link to="/blog" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video border"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
    <div className="prose prose-lg max-w-none">
  <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
  {Array.isArray(post.body) && (
    <PortableText 
      value={post.body} 
      components={components}
    />
  )}
</div>
    </main>
  );
};
