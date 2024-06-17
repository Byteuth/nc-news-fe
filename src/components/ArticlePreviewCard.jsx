const ArticlePreviewCard = ({article}) => {
    console.log(article)
    return (
        <div className="article-preview-card">
            <div className="article-image-container">
                <img 
                    className="article-image"
                    src={article.article_img_url}
                    alt="Article Preview" 
                />
            </div>
            <div className="article-details">
                <div className="article-header">
                    <h3> {article.title} </h3>
                    <p> topic: {article.topic}</p>
                    <p> author: {article.author}</p>
                    <p> published: {article.created_at}</p>
                </div>
                <div className="article-footer">
                    <p> comments: {article.comment_count}</p>
                    <p> votes: {article.votes}</p>
                </div>
            </div>
        </div>
    )
}

export default ArticlePreviewCard