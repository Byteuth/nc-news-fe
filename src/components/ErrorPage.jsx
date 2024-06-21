import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <>
            <h4 className="generic-border"> ..something went wrong..</h4>
            <Link  className="generic-border" to={`/articles`} >click to redirect</Link>
        </>
    )
}

export default ErrorPage