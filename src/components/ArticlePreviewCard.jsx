import { Link } from "react-router-dom"

const ArticlePreviewCard = ({article}) => {

    return (
        <div >
            <Link className="article-preview-card" to={`/articles/${article.article_id}`}>
            <article className="generic-article">
                <p/>
                <figure >
                    <img 
                        className="article-image"
                        src={article.article_img_url}
                        alt="Article Preview"
                    />
                </figure>
                <p/>
                <section className="article-section">
                        <h2 > {article.title} </h2>
                        <h4 className="generic-text" > topic: {article.topic}</h4>
                        <p className="generic-text" > author: {article.author}</p>
                        <p className="generic-text"> published: {article.created_at}</p>
                        <p className="generic-text"> votes: {article.votes}</p>
                </section>
            </article>
        </Link>
        </div>
    )
}

export default ArticlePreviewCard