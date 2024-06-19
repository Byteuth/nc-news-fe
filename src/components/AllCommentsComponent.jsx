import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import CommentCard from './CommentCard'
import ArticlePreviewCard from './ArticlePreviewCard'
import AddNewCommentContainer from './AddNewCommentContainer'

import {getArticleById, getComments} from '../utils/api-utils'


const AllCommentsComponent = () => {
    const [article, setArticle] = useState([])
    const [commentsList, setCommentsList] = useState([])
    const [error, setError] = useState(null)
    const params = useParams()

    useEffect(() => {
        getArticleById(params.article_id)
        .then((response) => setArticle(response))
        .catch((err) => setError(err))

        getComments(params.article_id)
        .then((response) =>  setCommentsList(response))
        .catch((err) => setError("No comments found"))
    },[params.article_id])



    return (
        <>
        <ArticlePreviewCard article={article}/>
        <AddNewCommentContainer 
            setCommentsList={setCommentsList} 
            commentsList={commentsList}
        />
        {commentsList[0]
        ? 
            <div className="comment-container">
            <CommentCard comment={commentsList[0]} voteTag="vote-not-allowed"/>
            {console.log(commentsList)}
            {commentsList.slice(1).map((comment) => (
                <li key={comment.comment_id} className="comment-container">
                    <CommentCard comment={comment} />
                </li>
            ))}
            </div>
        : null
        }
        </>
    )
}

export default AllCommentsComponent