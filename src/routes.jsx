import { createBrowserRouter } from "react-router-dom";

// Views
import PrivateRoute from "./views/private";
import LoginView from "./views/login";
import DashboardView from "./views/admin/views/dashboard";
import NotFoundView from "./views/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginView />,
  },
  {
    path: "/admin",
    element: <PrivateRoute view={<DashboardView />} />,
  },
  {
    path: "*",
    element: <NotFoundView />,
  },
]);

export default router;
