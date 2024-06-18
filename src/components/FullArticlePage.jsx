import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import {getArticleById} from '../utils/api-utils'

const FullArticlePage = () => {
const [article, setArticle] = useState([])
let params = useParams()


    useEffect(() => {
        getArticleById(params.article_id)
        .then((response) => setArticle(response))
        .catch((err) => console.log(err))
    })
    
    return (
        <article >
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
                <footer>
                    <p> comments: {article.comment_count}</p>
                    <p> votes: {article.votes}</p>
                </footer>
            </section>
        </article>
    )
}

export default FullArticlePage