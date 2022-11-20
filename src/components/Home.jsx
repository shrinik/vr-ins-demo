import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <Link to="/quote">Quote</Link>
    </nav>
  );
}

export default Home;
