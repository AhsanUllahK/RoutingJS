import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const navToPage = (url) =>{
        // let x = false;
        // if(x){
        // navigate("/about");
        // }
        // else{
        // navigate("/filter");

        // }

        navigate(url);
    }
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is Me from National University</p>
      <p>How are You</p>
      <Link to="/about">Go to About Page</Link>
      <br />
      <br />
      {/* <button onClick={()=> navigate("/about")}>Got to About Page</button>
      <br />
      <br />
      <button onClick={()=> navigate("/filter")}>Got to Filter Page</button> */}

      <button onClick={()=> navToPage('/about')}>Got to About Page</button>
      <button onClick={()=> navToPage('/filter')}>Got to Filter Page</button>
      <br />
    </div>
  );
}

export default Home;
