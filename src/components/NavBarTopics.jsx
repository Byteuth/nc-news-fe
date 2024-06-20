import { useState, useEffect }  from 'react'

import { getAllTopics } from '../utils/api-utils'


const NavBarTopics = () => {
    const [topicsList, setTopicsList] = useState([])
    
    useEffect(() => {
        getAllTopics()
        .then((topics) => setTopicsList(topics))
    },[])

    return (
        <div className="generic-border">
            <ul className="nav-button-container">    {/* alternative to index? */}
            {topicsList.map((topic, index) => (
                <li key={index}>
                    <button>{topic.slug}</button>
                </li>
            ))}
            </ul>
        </div>

    )
}



export default  NavBarTopics