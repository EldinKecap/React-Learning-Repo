import { Link, useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate();

function navigateHandler() {
    navigate('products')
}

    return <>
        <h1>My home page</h1>
        <p>Go to list of </p>
        <Link to='products' >products</Link>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
    </>
}

export default HomePage