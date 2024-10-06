import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    navigate(`/order/${search}`);
    setSearch("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search for order"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
