import { useState, useEffect }  from 'react'

import { getAllTopics } from '../utils/api-utils'


const NavBarTopics = ({setSelectedTopic}) => {
    const [topicsList, setTopicsList] = useState([])
    
    useEffect(() => {
        getAllTopics()
        .then((topics) => setTopicsList(topics))
    },[])

    return (
        <div className="generic-border">
            <ul className="nav-button-container">   
            {topicsList.map((topic) => (
                <li key={topic.slug}>
                    <button onClick={() => setSelectedTopic(topic.slug)}>  {topic.slug} </button>
                </li>
            ))}            
            <button onClick={() => setSelectedTopic(null)}> All </button>
            </ul>
        </div>

    )
}



export default  NavBarTopics