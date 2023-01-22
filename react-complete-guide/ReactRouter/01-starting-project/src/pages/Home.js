import { Link } from "react-router-dom"

function HomePage(){
    return <>
    <h1>My home page</h1>
    <p>Go to list of </p>
    <Link to='/products' >products</Link>
    </>
}

export default HomePage