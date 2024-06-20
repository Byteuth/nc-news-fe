import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import CommentsList from './CommentsList'
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
        .then((response) => setCommentsList(response))
        .catch((err) =>  setError("No comments found"))
    },[params.article_id])


    return (
        <>
        <ArticlePreviewCard article={article}/>
        <AddNewCommentContainer setCommentsList={setCommentsList} />
        <CommentsList commentsList={commentsList}/> 
        </>
    )
}

export default AllCommentsComponent