import { Link } from "react-router-dom"
import { useState } from 'react'

const NavBar = () => {
    const [currentPage, setCurrentPage] = useState('')


    return (
        <nav >
            <h3 className="generic-text" >Selected Page: {currentPage}</h3>
            <ul className="nav-button-container" >
                <li >
                <button>                    
                    <Link 
                        className="nav-button" 
                        to="/articles"
                        onClick={(() => setCurrentPage('articles'))}> 
                        View articles
                    </Link>   
                </button>       
                <button> 
                    <Link 
                        className="nav-button" 
                        to="/users"
                        onClick={(() => setCurrentPage('users'))}>                    
                        users Page
                    </Link> 
                </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar