import { useState } from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice.js";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username);

    dispatch(updateName(username));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 text-sm text-stone-600 md:text-base"
    >
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
