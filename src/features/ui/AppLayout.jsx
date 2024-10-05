import MyHeader from "./MyHeader";
import CartOverView from "../cart/CartOverview";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
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
