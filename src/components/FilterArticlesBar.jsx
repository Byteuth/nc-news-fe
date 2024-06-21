import  { useEffect, useState } from 'react'



const FilterArticlesBar = ({setQueryValues} ) => {
    const [selectedAuthor, setSelectedAuthor] = useState('')
    const [selectedCommentCount, setSelectedCommentCount] = useState('')
    const [selectedVoteCount, setSelectedVoteCount] = useState('')


    const handleChangeAuthor = (event) => {
        setSelectedAuthor(event.target.value)
    }

    // const handleChangeCommentCount = (event) => {
    //     setSelectedCommentCount(event.target.value)
    // }


    const handleSubmit = (event) => {
        event.preventDefault()

        let query = {}
        if (selectedAuthor) query.selectedAuthor = selectedAuthor
        if (selectedCommentCount) query.selectedCommentCount = selectedCommentCount
        if (selectedVoteCount) query.selectedVoteCount = selectedVoteCount


        setQueryValues(query)

    }


        return (
            <div className="generic-border">
            <form onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="text"
                    placeholder="author name"
                    value={selectedAuthor}
                    onChange={handleChangeAuthor}
                />
                {/* <select
                    className="input-field"
                    value={selectedCommentCount}
                    onChange={handleChangeCommentCount}
                >
                <option value=">10" > less than 10 </option>
                <option value="10 to 20 "> 10 to 20  </option>
                <option value="20 to 50"> 20 to 50 </option>
                <option value="50 to 100"> 50 to 100 </option>
                <option value="100+">100+ </option>
                </select> */}
                {/* <input
                    className="input-field"
                    type="number"
                    placeholder="vote count"
                    value={selectedVoteCount}
                    onChange={handleChangeVoteCount}
                /> */}
                <button type="submit">post</button>
            </form>
            </div>
        )
}

export default FilterArticlesBar