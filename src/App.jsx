import { Routes, Route} from 'react-router-dom';
import './App.css'

import NavBar from './components/NavBar'
import ArticlesPage from './components/ArticlesPage'
import IndividualArticlePage from './components/IndividualArticlePage'
import UsersPage from './components/UsersPage'
import ErrorPage from './components/ErrorPage'
import AllCommentsComponent from './components/AllCommentsComponent'


function App() {

  return (
    <div>
      <h1 className="generic-border">nc-news</h1> 
      <Routes >
        <Route path="/" element={<NavBar/>} />  
        <Route path="/articles" element={<ArticlesPage/>} /> 
        <Route path="/articles/:article_id" element={<IndividualArticlePage/>} /> 
        <Route path="/articles/:article_id/comments" element={<AllCommentsComponent/>}/>
        <Route path="/articles/users" element={<UsersPage/>} /> 
        <Route path="/error" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App
