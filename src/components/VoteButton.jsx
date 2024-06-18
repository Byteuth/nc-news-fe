import { useState, useEffect } from 'react'

import {postVote} from '../utils/api-utils'

const VoteButton = ({article}) => {
    const initialVoteCount = article.votes
    const [voteCount, setVoteCount] = useState(initialVoteCount || 0)

    const articleId = 6
    useEffect(() => {
        postVote(voteCount, articleId)
        .then(() => setVoteCount(voteCount))
        .catch((err) => console.log(err))
    },[initialVoteCount])


    const handleClick = (event) => {
        event.preventDefault()
        setVoteCount(voteCount +1)
    }

    return (
        <div className="vote-container">
            <p className="vote-current"> votes: {article.votes} </p>
            <button onClick={handleClick} className="vote-button"> vote </button>
        </div>
    )
}

export default VoteButton