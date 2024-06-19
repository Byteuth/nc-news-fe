import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import CommentCard from './CommentCard'

import {getArticleById, getComments} from '../utils/api-utils'
import ArticlePreviewCard from './ArticlePreviewCard'


const AllCommentsComponent = () => {
    const [article, setArticle] = useState([])
    const [comments, setComments] = useState([])
    const [error, setError] = useState(null)
    const params = useParams()

    useEffect(() => {
        getArticleById(params.article_id)
        .then((response) => setArticle(response))
        .catch((err) => setError(err))

        getComments(params.article_id)
        .then((response) =>  setComments(response))
        .catch((err) => setError("No comments found"))
    },[params.article_id])



    return (
        <>
        <ArticlePreviewCard article={article}/>
        {comments.map((comment) => (
            <li key={comment.comment_id} className="comment-container">
                <CommentCard comment={comment} />
            </li>
        ))}
        </>
    )
}

export default AllCommentsComponent