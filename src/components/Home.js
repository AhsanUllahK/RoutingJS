import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
        <h1>Home Page</h1>
        <p>This is Me from National University</p>
        <p>How are You</p>
        <Link to="/about" >Go to About Page</Link>
        </div>
    )
    
}

export default Home;