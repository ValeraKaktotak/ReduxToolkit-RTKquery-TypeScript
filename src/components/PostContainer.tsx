import { postAPI } from "services/PostService";
import PostItem from "./PostItem";



export const PostContainer = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)
  return (
    <div className="post__list">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {posts && posts.map((post)=> <PostItem key={post.id} post={post} />)}
    </div>
  )
};
