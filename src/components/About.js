import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is Me from National University</p>
      <p>How are You</p>
      <Link to="/">Go to Home Page</Link>

      <li>
        <Link to="/user/ahsan">Ahsan</Link>
      </li>
      <li>
        <Link to="/user/sabir">Sabir</Link>
      </li>
      {/* 
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li> */}

      {/* using anchor tag routing from one page to another, the whole
       page/website/html refreshes which is a overhead and not a 
       feature of single page appplication. */}
    </div>
  );
}
