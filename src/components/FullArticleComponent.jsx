import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import {getArticleById, getComments} from '../utils/api-utils'
import CommentCard from './CommentCard'
import VoteButton from './VoteButton'



const FullArticleComponent = () => {
const [article, setArticle] = useState([])
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true)
const loadImgUrl = "https://cdn.discordapp.com/attachments/1202598484268687421/1252630131625951294/image.png?ex=6672ea38&is=667198b8&hm=22cce4c383c94d6bdc6b899529b4d891efd7ecf4f83b2bc56660f9a99b273473&"
let params = useParams()


    useEffect(() => {
        getArticleById(params.article_id)
        .then((response) => setArticle(response))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    },[params.article_id])

    useEffect(() => {
        getComments(params.article_id)
        .then((response) => setComments(response))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    },[params.article_id])
    
    
    return (
        <>
        <div className="">
            {isLoading 
            ? <img 
                className="loading-img"
                src ={loadImgUrl}
                alt="loading image"/> 

            : <article >
                <h3 className="article-header"> {article.title} </h3>
                <p/>
                <figure>
                    <img 
                        className="article-image"
                        src={article.article_img_url}
                        alt="Article Preview"
                    />
                </figure>
                <p/>
                <section className="article-section">
                        <h3 > {article.title} </h3>
                        <h4> topic: {article.topic}</h4>
                        <p> author: {article.author}</p>
                        <p> published: {article.created_at}</p>
                        <p> {article.body}</p>
                    <footer>
                        <p> comments: {article.comment_count}</p>
                    </footer>
                </section>
            </article>
            }
        <VoteButton article={article}/>
        </div>
        <div>
            {comments.map((comment) => (
                    <li 
                    key={comment.comment_id}
                    className="comment-container">
                        <CommentCard comment={comment}/>
                    </li>
                ))}
        </div>
        </>
    )
}

export default FullArticleComponent