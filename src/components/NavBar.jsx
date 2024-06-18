import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul className="no-list-bullets">
                <li>
                    <button>                    
                        <Link to="/articles"> View articles</Link>   
                    </button>       
                    <button>  
                        <Link to="/articles/:item_id"> Search for article</Link>   
                    </button>
                </li>
                <li>
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