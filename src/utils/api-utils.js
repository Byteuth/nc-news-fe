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


const postVote = (articleId, votes) => {
    return ncnewsApi.patch(`/articles/${articleId}`, {inc_votes: votes} )
    .then((response) => {response.data.updatedArticle, console.log(response.data.updatedArticle)})
    .catch((err) => console.log(err))
}

const postComment = (comment, articleId) => {
    return ncnewsApi.post(`/articles/${articleId}/comments`, comment)
    .then((response) => response.data.postedComment)
    .catch((err) => {
        console.error('Error posting comment:', err)
        throw err
    });
}


export {getAllArticles, getAllTopics, getArticleById, getComments, postVote, postComment}