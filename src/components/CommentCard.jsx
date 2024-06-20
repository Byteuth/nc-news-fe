import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import VoteButton from './VoteButton'

import { useContext  } from 'react'
import { UserContext } from '../contexts/User'

import {deleteCommentById} from '../utils/api-utils'

const CommentCard = ({comment, voteTag, onDelete}) => {
    const { username, setUsername } = useContext(UserContext)
    const params = useParams()
    const navigate = useNavigate()


    const handleClick = (event) => {
        event.preventDefault()

        navigate(`/articles/${params.article_id}/comments/${comment.comment_id}`)
        console.log(username)
        deleteCommentById(comment.comment_id)
        .then((response) =>  {
            onDelete(comment.comment_id)
            navigate(`/articles/${params.article_id}/comments`)
        })
        .catch((err) => err)
    
    }

    return (
        <>
        <div className="single-comment-container">
            <p className="generic-text">from: {comment.author}  </p>
            <p className="generic-text"> {comment.body}</p>
            <p className="generic-text"> {comment.created_at} </p>
        
            {!voteTag && <VoteButton item={comment} />}

            {comment.author === username
                ?   <button 
                    className="generic-delete-button"
                    onClick={handleClick}>Delete comment</button>   
                :   null
            }
            <p/>
        </div>  
        </>
    )
}

export default CommentCard
//374