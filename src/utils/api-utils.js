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

const getUsers = () => {
    return ncnewsApi.get(`/users`)
    .then((response) => response.data.users)
    .catch((err) => err)
}


const postVote = (articleId, votes) => {
    return ncnewsApi.patch(`/articles/${articleId}`, {inc_votes: votes} )
    .then((response) => response.data.updatedArticle)
    .catch((err) => err)
}

const postComment = (commentData, articleId) => {
    console.log(commentData, articleId)
    return ncnewsApi.post(`/articles/${articleId}/comments`, commentData)
    .then((response) => response.data.postedComment)
    .catch((err) => err)
}

const deleteCommentById = (commentId) => {
    return ncnewsApi.delete(`/comments/${commentId}`)
    .then((response) => response.status)
    .catch((err) => err.status)
}



export {getAllArticles, getAllTopics, getArticleById, getComments, postVote, postComment, getUsers, deleteCommentById}