import { IPost } from 'models/IPost'
import React from 'react'

interface PostItemProps {
    post: IPost
}

const PostItem:React.FC<PostItemProps> = ({post}) => {
    return (
        <div className='post'>
            {post.id}
            <br/>
            {post.body}
            <button>DELETE</button>
        </div>
    )
}

export default PostItem