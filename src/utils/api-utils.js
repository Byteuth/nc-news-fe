import axios from 'axios';

const allarticlesURL = 'https://nc-news-api-v5m5.onrender.com/api/articles'
export const getAllArticles = () => {
    return axios.get(allarticlesURL)
    .then((response) =>  response.data.articles)
    .catch((err) => console.log(err))

}


export default getAllArticles