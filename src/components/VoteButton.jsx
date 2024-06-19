import { useState, useEffect } from 'react'

import {postVote} from '../utils/api-utils'

const VoteButton = ({ item }) => {
    const [voteCounter, setVoteCounter] = useState(item.votes || 0)

    useEffect(() => {
        setVoteCounter(item.votes)
    },[item.votes])

    const handleClick = () => {
        const itemId = item.article_id || item.comment_id

        postVote(itemId, 1)
            .then(() => {
                setVoteCounter(previousCount => previousCount +1)
            })
            .catch((err) => err)
        }

    return (
        <div className="vote-container">
            <p className="vote-current"> votes: {voteCounter} </p>     
            <button 
                onClick={handleClick} 
                className="vote-button">
                Vote
            </button>
        </div>
    )
}

export default VoteButton