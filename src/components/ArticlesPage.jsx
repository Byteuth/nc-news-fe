import { useState, useEffect } from "react"

import NavBar from './NavBar'
import NavBarTopics from './NavBarTopics'
import SearchArticleByIdForm from './SearchArticleByIdForm'
import ArticlesList from './ArticlesList'

import {getAllArticles} from '../utils/api-utils'

const ArticlesPage = () => {
    const [articlesToDisplay, setArticlesToDisplay] = useState([])
    const [error, setError] = useState(null)
    

    useEffect(() => {
        getAllArticles()
        .then((articlesList) => setArticlesToDisplay(articlesList))
        .catch((err) => setError(err.message))
    },[])

    return (
        <>
            <NavBar />
            <h2 className="generic-border"> Articles </h2>
            <NavBarTopics />
            <SearchArticleByIdForm />
            <ArticlesList articlesToDisplay={articlesToDisplay} />
        </>

    )
}

export default  ArticlesPage