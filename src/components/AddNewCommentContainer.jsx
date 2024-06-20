import { useParams } from 'react-router-dom'
import { useState, useContext} from 'react'
import { UserContext } from '../contexts/User'

import { postComment } from '../utils/api-utils'

const AddNewCommentContainer = ({ setCommentsList }) => {
    const [comment, setComment ] = useState('')
    const [postSuccess, setPostSuccess] = useState('')
    const {username, setUsername} = useContext(UserContext)
    const [apiError, setApiError] = useState(null)
    const params = useParams()

    const handleClick = (event) => {
        event.preventDefault()

        const commentData = { body: comment, username }
        postComment(commentData, params.article_id)
        .then((response) => {
            if (response.code === 'ERR_BAD_REQUEST') {
                setApiError('Error no user selected')
                setComment('')
                setPostSuccess(null)
            } else {
                setCommentsList((prevCommentsList) => [response, ...prevCommentsList])
                setComment('')
                setPostSuccess(true)
            }

        })
        .catch((err) => err)
    }


    const handleChange = (event) => {
        setPostSuccess(false)
        setComment(event.target.value)
    }


    return (
        <div className="generic-border">
            {postSuccess && <h2 > post successful : )</h2>}
            <form onSubmit={handleClick}>
                <input
                    className="input-field"
                    type="text"
                    placeholder="your comment here"
                    value={comment}
                    onChange={handleChange}
                    required
                />
                <button type="submit">post</button>
            </form>
            {apiError && <h3 className="error-message"> {apiError} </h3>}
        </div>
        
    )
}
export default AddNewCommentContainer