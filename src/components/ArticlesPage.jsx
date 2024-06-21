import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import NavBarTopics from './NavBarTopics'
import SearchArticleByIdForm from './SearchArticleByIdForm'
import ArticlesList from './ArticlesList'

import {getAllArticles} from '../utils/api-utils'

const ArticlesPage = () => {
    const [articlesToDisplay, setArticlesToDisplay] = useState([])
    const [error, setError] = useState(null)
    const [articles, setArticles] = useState([])
    const [selectedTopic, setSelectedTopic] = useState(null)
    const navigate = useNavigate()
    

    useEffect(() => {
        getAllArticles()
        .then((articlesList) =>{
            setArticles(articlesList)
            setArticlesToDisplay(articlesList)
        })
        .catch((err) => setError(err.message))
    },[])

    useEffect(() => {
        if (selectedTopic) {
            setArticlesToDisplay(articles.filter((article) => article.topic === selectedTopic)) 
            navigate(`/articles?topic=${selectedTopic}`)
        } else {
            setArticlesToDisplay(articles)
            navigate(`/articles/`)
        }
    },[selectedTopic, articles])



    return (
        <>
            <h2 className="generic-border"> Topic: {selectedTopic || 'all'}</h2>
            <NavBarTopics setSelectedTopic={setSelectedTopic}/>
            <SearchArticleByIdForm />
            <ArticlesList articlesToDisplay={articlesToDisplay} />
            {error && <p className="error"> {error} </p>}
        </>

    )
}

export default  ArticlesPage