import { createBrowserRouter } from "react-router-dom";

// Views
import PrivateRoute from "./views/private";
import LoginView from "./views/login";
import DashboardView from "./views/admin/views/dashboard";
import NotFoundView from "./views/404";
import NewSubscriptionView from "./views/admin/views/subscription/new";

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
    path: "/admin/subscription/new",
    element: <PrivateRoute view={<NewSubscriptionView />} />,
  },
  {
    path: "/admin/subscription/edit",
    element: <PrivateRoute view={<NewSubscriptionView edit={true} />} />,
  },
  {
    path: "*",
    element: <NotFoundView />,
  },
]);

export default router;
