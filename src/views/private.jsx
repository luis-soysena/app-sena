import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/cookies";

const PrivateRoute = ({ view }) => {
  const { VITE_COOKIE_NAME: cookieName } = import.meta.env;
  const [isLoading, setLoading] = useState(true);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if (getCookie(cookieName)) {
      setUserLogged(true);
    }

    return () => setLoading(false);
  }, []);

  return isLoading ? <p>Validando sesión...</p> : (
    userLogged ? view : <Navigate to="/" replace={true} />
  );
}

export default PrivateRoute;
