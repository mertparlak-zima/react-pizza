import { Link } from "react-router-dom";

function MyHeader() {
  return (
    <header>
      <Link to={"/"}>Fast React Pizza Co.</Link>
      <p>Zima</p>
    </header>
  );
}

export default MyHeader;
