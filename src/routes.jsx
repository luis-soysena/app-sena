import { createBrowserRouter } from "react-router-dom";

// Views
import PrivateRoute from "./views/private";
import LoginView from "./views/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginView />,
  },
  {
    path: "/admin",
    element: <PrivateRoute view={<p>Admin</p>} />,
  },
]);

export default router;
