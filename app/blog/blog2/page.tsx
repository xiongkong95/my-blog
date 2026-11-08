import { BlogArticle } from "../blog-article";
import { blogPosts } from "../blog-data";

export default function BlogTwoPage() {
  return <BlogArticle post={blogPosts[1]} />;
}