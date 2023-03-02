import { PostsList } from "../list/PostsList";
import { Post } from "../post/Post";
import './PostContent.scss';
export function PostContent() {
  return (
    <section className="post-content">
      <article>
        <PostsList />
      </article>
      <article>
        < Post />
      </article>
    </section>
  );
}
  
  