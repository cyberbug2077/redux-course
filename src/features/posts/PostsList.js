import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
<<<<<<< HEAD
import { sub } from "date-fns";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
=======
>>>>>>> parent of 86a9d06 (show author of posts)

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
<<<<<<< HEAD
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} /> 
            </p>
=======
            <p>{post.content.substring(0,100)}</p>
>>>>>>> parent of 86a9d06 (show author of posts)
        </article>
    ))

    return (
        <div>
            <h2>Posts</h2>
            {renderedPosts}
        </div>
    )
}

export default PostsList
