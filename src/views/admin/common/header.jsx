import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCookie, deleteCookie } from "../../../utils/cookies";

const AdminHeader = () => {
  const { VITE_APP_NAME: appName, VITE_COOKIE_NAME: cookieName } = import.meta.env;

  const [userLogged, setUserLogged] = useState(false);

  const signOut = () => {
    deleteCookie(cookieName);
    window.location.assign("/");
  };

  useEffect(() => {
    if (getCookie(cookieName)) {
      setUserLogged(true);
    }
  }, []);

  return (
    <header className="pt-3 pb-3 bg-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <Link
              to="/admin"
              className="text-light text-decoration-none"
              style={{
                fontSize: "1.7rem",
              }}
            >
              {appName}
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-end">
            {userLogged && (
              <button className="btn btn-danger" onClick={() => signOut()}>
                <span>Salir</span>
                <i className="bi bi-box-arrow-right ms-2"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
