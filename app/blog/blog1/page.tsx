import { BlogArticle } from "../blog-article";
import { blogPosts } from "../blog-data";

export default function BlogOnePage() {
  return <BlogArticle post={blogPosts[0]} />;
}