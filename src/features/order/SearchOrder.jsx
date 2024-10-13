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
        className="w-28 rounded-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Search for order"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
