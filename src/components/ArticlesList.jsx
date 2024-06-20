import ArticlePreviewCard from './ArticlePreviewCard'

const ArticlesList = ({articlesToDisplay}) => {
    return (
        <div className="article-section">
            <ul>
            {articlesToDisplay.map((article) => (
                <li 
                key={article.article_id}
                className="article-preview-card">
                    <ArticlePreviewCard article={article}/>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ArticlesList