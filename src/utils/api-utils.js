import axios from 'axios'

const ncnewsApi = axios.create({
    baseURL: 'https://nc-news-api-v5m5.onrender.com/api'
})


const getAllArticles = () => {
    return ncnewsApi.get('/articles')
    .then((response) =>  response.data.articles)
    .catch((err) => err)
    
}

const getArticleById = (articleId) => {
    return ncnewsApi.get(`/articles/${articleId}`)
    .then((response) =>  response.data.article)
    .catch((err) => err)
    
}

const getAllTopics = () => {
    return ncnewsApi.get('/topics')
    .then((response) =>  response.data.topics)
    .catch((err) => console.log(err))

}

const getComments = (articleId) => {
    return ncnewsApi.get(`/articles/${articleId}/comments`)
    .then((response) => response.data.article)
    .catch((err) => err)
}


const postVote = (vote, articleId) => {
    console.log(articleId)
    return ncnewsApi.patch(`/articles/${articleId}`, vote)
    .then((response) => console.log(response))
    .catch((err) => err)
}





export {getAllArticles, getAllTopics, getArticleById, getComments, postVote}