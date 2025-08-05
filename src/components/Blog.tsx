import { Header } from "./Header";
import { images } from "../assets/optimized_photos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SanityDocument } from "@sanity/client";
import { client } from "../sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export const Blog = () => {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto min-h-screen max-w-3xl p-8">
        Loading posts...
      </div>
    );
  }

  return (
    <main>
      <Header
        src1600={images.masonsquat_1600}
        src1200={images.masonsquat_1200}
        src768={images.masonsquat_768}
        title="Blog"
      />
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link to={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
