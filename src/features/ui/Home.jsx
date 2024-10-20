import CreateUser from "../user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const { name } = useSelector((store) => store.user);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
        {name === "" ? (
          <CreateUser />
        ) : (
          <div className="mt-6">
            <Button to="/menu" type="primary">
              Continue irderung, {name}
            </Button>
          </div>
        )}
      </h1>
    </div>
  );
}

export default Home;
