import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import NavBarTopics from './NavBarTopics'
import SearchArticleByIdForm from './SearchArticleByIdForm'
import ArticlesList from './ArticlesList'
import FilterArticlesBar from './FilterArticlesBar'

import {getAllArticles} from '../utils/api-utils'

const ArticlesPage = () => {
    const [articlesToDisplay, setArticlesToDisplay] = useState([])
    const [error, setError] = useState(null)
    const [articles, setArticles] = useState([])
    const [selectedTopic, setSelectedTopic] = useState(null)
    const [queryValues, setQueryValues] = useState('')
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
        if (queryValues.selectedAuthor) {
            
            setArticlesToDisplay(articles.filter((article) => article.author === queryValues.selectedAuthor)) 
            console.log(articlesToDisplay)
            navigate(`/articles?author=${queryValues.selectedAuthor}`)
        }
        if (selectedTopic) {
            setArticlesToDisplay(articles.filter((article) => article.topic === selectedTopic)) 
            navigate(`/articles?topic=${selectedTopic}`)
            
        } else {
            setArticlesToDisplay(articles)
            navigate(`/articles/`)
        }
    },[selectedTopic, articles, queryValues])



    return (
        <>
            <h2 className="generic-border"> Topic: {selectedTopic || 'all'}</h2>
            <NavBarTopics setSelectedTopic={setSelectedTopic}/>
            {/* <SearchArticleByIdForm /> */}
            {/* <FilterArticlesBar setQueryValues={setQueryValues}/> */}
            <ArticlesList articlesToDisplay={articlesToDisplay} />
            {error && <p className="error"> {error} </p>}
        </>

    )
}

export default  ArticlesPage