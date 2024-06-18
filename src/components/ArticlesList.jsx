import ArticlePreviewCard from './ArticlePreviewCard'

const ArticlesList = ({articlesToDisplay}) => {
    return (
        <div className="generic-border">
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