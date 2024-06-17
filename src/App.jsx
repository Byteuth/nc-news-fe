import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'

import NavBar from './components/NavBar'
import ArticlesPage from './components/ArticlesPage'
import IndividualArticlePage from './components/IndividualArticlePage'
import UsersPage from './components/UsersPage'
function App() {


  return (
    <>
      <h1>nc-news</h1> 
      <Routes>
        <Route path="/" element={<NavBar/>} />  
        <Route path="/articles" element={<ArticlesPage/>} /> 
        <Route path="/articles/:article_id" element={<IndividualArticlePage/>} /> 
        <Route path="/articles/:article_id" element={<UsersPage/>} /> 
      </Routes>
    </>
  )
}

export default App
