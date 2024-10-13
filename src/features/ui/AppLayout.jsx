import MyHeader from "./MyHeader";
import CartOverView from "../cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-red-50">
      {isLoading && <Loader />}
      <MyHeader />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* The Outlet component is a placeholder for the child routes of the
        current route. The child routes are rendered inside the Outlet
        component. */}
          <Outlet />
        </main>
      </div>
      <CartOverView />
    </div>
  );
}

export default AppLayout;
