import { Routes, Route} from 'react-router-dom';
import './App.css'

import { useContext  } from 'react'
import { UserContext } from './contexts/User'


import NavBar from './components/NavBar'
import ArticlesPage from './components/ArticlesPage'
import IndividualArticlePage from './components/IndividualArticlePage'
import LoginPage from './components/LoginPage'
import ErrorPage from './components/ErrorPage'
import AllCommentsComponent from './components/AllCommentsComponent'




function App() {
  const { username, setUsername } = useContext(UserContext)

  return (
    <div>
        <h1 className="generic-border">nc-news</h1> 
        <h2 className="generic-border">Logged in as: {username} </h2>
        <NavBar />
      <Routes >
        {/* <Route path="/" element={<NavBar/>} />   */}
        <Route path="/articles/:article_id/comments/:comment_id" element={<AllCommentsComponent/>}/>
        <Route path="/articles/:article_id/comments" element={<AllCommentsComponent/>}/>
        <Route path="/articles/:article_id" element={<IndividualArticlePage/>} />
        <Route path="/articles/:topic_slug" element={<ArticlesPage/>} />  
        <Route path="/articles" element={<ArticlesPage/>} /> 
        <Route path="/users"  element={<LoginPage/>} /> 
        <Route path="/error" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App
