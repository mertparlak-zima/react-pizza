import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";

function MyHeader() {
  return (
    <header>
      <Link to={"/"}>Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Zima</p>
    </header>
  );
}

export default MyHeader;
