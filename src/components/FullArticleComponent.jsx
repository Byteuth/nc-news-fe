import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from "react"

import {getArticleById} from '../utils/api-utils'

import VoteButton from './VoteButton'



const FullArticleComponent = () => {
const [article, setArticle] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(null)
const loadImgUrl = "https://cdn.discordapp.com/attachments/1202598484268687421/1252630131625951294/image.png?ex=6672ea38&is=667198b8&hm=22cce4c383c94d6bdc6b899529b4d891efd7ecf4f83b2bc56660f9a99b273473&"
let params = useParams()



    useEffect(() => {
        setIsLoading(true)
        setError(null)
        getArticleById(params.article_id)
        .then((response) => setArticle(response))
        .catch((err) =>  setError("No article found"))
        .finally(() => setIsLoading(false))
    },[params.article_id])




    
    return (
        <>
        {article.article_id 
        ? <div className="">
            {isLoading 
            ? 
                <img
                    className="loading-img"
                    src={loadImgUrl}
                    alt="loading image"
                />
            : 
                <article>
                    <h3 className="article-header"> {article.title} </h3>
                    <p />
                    <figure>
                        <img
                            className="article-image"
                            src={article.article_img_url}
                            alt="Article Preview"
                        />
                    </figure>
                    <p />
                    <section className="article-section">
                        <h3> {article.title} </h3>
                        <h4> topic: {article.topic}</h4>
                        <p> author: {article.author}</p>
                        <p> published: {article.created_at}</p>
                        <p> {article.body}</p>
                        <footer>
                            <p> comments: {article.comment_count}</p>
                        </footer>
                    </section>
                    <VoteButton item={article} />
                </article>
            }
            <div className="load-comments-container">
                <button className="load-comments-button">                    
                    <Link to={`/articles/${article.article_id}/comments`}> Load comments</Link>   
                </button>  
            </div>
        </div>
        : <h3>Article does not exist </h3>
        } 
        </>
    )
    
}

export default FullArticleComponent