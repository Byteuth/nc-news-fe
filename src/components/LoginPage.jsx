import { useContext, useState, useEffect  } from 'react'
import { UserContext } from '../contexts/User'

import { getUsers } from '../utils/api-utils'


const LoginPage = () => {
    const { username, setUsername } = useContext(UserContext)
    const [ userList, setUserList] = useState([])

    const handleUserClick = (user) => {
        console.log(user)
        setUsername(user)
    }
    
    useEffect(() => {
        getUsers()
        .then((response) => {setUserList(response), console.log(response)})
        .catch((err) => console.log(err))
    },[])

    return (
        <>
        <div className="generic-border">
            <ul className="select-user-container">
                <h4 className="generic-text">select user: </h4>
                {userList.map((user) => (
                <li 
                    key={user.username}
                    className="user-preview-card">
                    <button 
                        className="select-user-button" 
                        onClick={() => handleUserClick(user.username)}>
                        {user.username}
                    </button>
                </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default LoginPage