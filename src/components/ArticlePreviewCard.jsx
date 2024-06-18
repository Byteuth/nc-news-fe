import { Link } from "react-router-dom"

const ArticlePreviewCard = ({article}) => {

    return (
        <Link to={`/articles/${article.article_id}`}>
        <article>
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
    </Link>
    )
}

export default ArticlePreviewCard