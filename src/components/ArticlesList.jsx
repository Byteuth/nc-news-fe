import ArticlePreviewCard from './ArticlePreviewCard'

const ArticlesList = ({articlesToDisplay}) => {
    return (
        <div className="generic-border">
            <ul>
            {articlesToDisplay.map((article) => (
                <li 
                key={article.article_id}
                className="generic-border">
                    <ArticlePreviewCard article={article}/>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ArticlesList