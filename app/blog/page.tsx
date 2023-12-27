import { allBlogs } from "@/.contentlayer/generated"
import Link from "next/link"
import * as console from "console";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allBlogs.map((blogPost) => (
        <article key={blogPost._id}>
          <Link href={blogPost.slug}>
            <h2>{blogPost.title}</h2>
          </Link>
          {blogPost.description && <p>{blogPost.description}</p>}
        </article>
      ))}
    </div>
  )
}
