const SearchArticleByIdForm = () => {

    return (
        <div className="generic-border" >
            <form>
                <input 
                    className="input-field"
                    type="text"
                    placeholder="article_id"
                />
                <button>search</button>
            
            </form>
        </div>
    )
}

export default SearchArticleByIdForm