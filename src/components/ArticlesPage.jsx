import { useState, useEffect } from "react"

import NavBarTopics from './NavBarTopics'
import SearchArticleByIdForm from './SearchArticleByIdForm'
import ArticlesList from './ArticlesList'

import getAllArticles from '../utils/api-utils'

const ArticlesPage = () => {
    const [articlesToDisplay, setArticlesToDisplay] = useState([])

    useEffect(() => {
        getAllArticles()
        .then((articlesList) => setArticlesToDisplay(articlesList))
    },[])

    return (
        <div>
            <h2> Articles </h2>
            <NavBarTopics />
            <SearchArticleByIdForm />
            <ArticlesList articlesToDisplay={articlesToDisplay} />
        </div>

    )
}

export default  ArticlesPage