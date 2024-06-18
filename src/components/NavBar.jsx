import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav >
            <ul className="nav-button-container" >
                <li >
                    <button>                    
                        <Link to="/articles"> View articles</Link>   
                    </button>       
                    <button> 
                        <Link to="/comments/:comment_id"> Comments</Link> 
                    </button>                 
                    <button> 
                        <Link to="/users"> Users</Link> 
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar