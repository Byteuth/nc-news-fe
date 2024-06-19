import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { postComment } from '../utils/api-utils'

const AddNewCommentContainer = ({ setCommentsList}) => {
    const [comment, setComment ] = useState('')
    const [username, setUsername] = useState('')
    const params = useParams()
    
    const handleClick = (event) => {
        event.preventDefault()

        const commentData = { body: comment, username }
        postComment(commentData, params.article_id)
        .then((response) => {
            setCommentsList((previousComments) => [response, ...previousComments])
            setComment('')
            setUsername('')
        })
        .catch((err) => console.log(err))
    }




    return (
        <div className="generic-border">
            <form onSubmit={handleClick}>
                <input
                    className="input-field"
                    type="text"
                    placeholder="your comment here"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
                <input
                    className="input-field"
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <button type="submit">post</button>
            </form>
        </div>
        
    )
}
export default AddNewCommentContainer