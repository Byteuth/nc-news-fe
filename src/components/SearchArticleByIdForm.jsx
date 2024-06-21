import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SearchArticleByIdForm = () => {
    const [articleId, setArticleId] = useState('')

    const navigate = useNavigate()

    const handleSubmit = () => {
        setArticleId()
        navigate(`/articles/${articleId}`)
    }

    return (
        <div className="generic-border" >
            <form onSubmit={handleSubmit}>
            <input
                    className="input-field"
                    type="number"
                    placeholder="article id"
                    value={articleId}
                    onChange={(e) => setArticleId(e.target.value)}
                    required
                />
                <button type="submit"> search </button>
            
            </form>
        </div>
    )
}

export default SearchArticleByIdForm