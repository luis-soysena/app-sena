import { createBrowserRouter } from "react-router-dom";

// Views
import PrivateRoute from "./views/private";
import LoginView from "./views/login";
import DashboardView from "./views/admin/views/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginView />,
  },
  {
    path: "/admin",
    element: <PrivateRoute view={<DashboardView />} />,
  },
]);

export default router;
