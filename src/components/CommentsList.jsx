import { useState, useEffect} from 'react'
import CommentCard from './CommentCard'

const CommentsList = ({commentsList}) => {
    const [commentsToShow, setCommentsToShow] = useState(commentsList || [])
    
    
    useEffect(() => {
        setCommentsToShow(commentsList)
    },[commentsList])

    const handleDelete = (commentId) => {
        setCommentsToShow(prevCommentsList => {
            return prevCommentsList.filter((comment) => comment.comment_id !== commentId)
        })
    }

    return (
            <div className="comment-container">
            {commentsToShow.map((comment) => (
                <div key={comment.comment_id} className="comment-container">
                    <CommentCard comment={comment} onDelete={handleDelete} />
                </div>
            ))}
        </div>
    )
}

export default CommentsList