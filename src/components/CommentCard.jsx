const CommentCard = ({comment}) => {

    return (
        <>
            <p className="comment-author"> from: {comment.author}  </p>
            <p className="comment-body"> {comment.body}</p>
            <p className="comment-date"> {comment.created_at} </p>
            <p className="comment-votes"> {comment.votes} </p>
        </>
    )
}

export default CommentCard