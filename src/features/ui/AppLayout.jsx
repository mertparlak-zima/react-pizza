import MyHeader from "./MyHeader";
import CartOverView from "../cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <MyHeader />
      <main>
        {/* The Outlet component is a placeholder for the child routes of the
        current route. The child routes are rendered inside the Outlet
        component. */}
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
}

export default AppLayout;
