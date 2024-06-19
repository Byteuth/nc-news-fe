import VoteButton from './VoteButton'

const CommentCard = ({comment, voteTag}) => {
    return (
        <>
        <div>
            <p className="comment-author">from: {comment.author}  </p>
            <p className="comment-body"> {comment.body}</p>
            <p className="comment-date"> {comment.created_at} </p>
        </div>
            {voteTag 
                ? null 
                : <VoteButton item={comment}/>
            }    
        </>
    )
}

export default CommentCard