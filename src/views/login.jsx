import { useState } from "react";
import { getAccess } from "../services/api";
import { setCookie } from "../utils/cookies";
import { Navigate } from "react-router-dom";

const LoginView = () => {
  const [email, setEmail] = useState("de@mo.co");
  const [password, setPassword] = useState("1234");
  const [loginError, setLoginError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  const signIn = async () => {
    if (email && password) {
      setLoginError(false);
      setLoading(true);

      const response = await getAccess({ email, password });
      console.log(response)
      const statusCode = response?.data?.code;

      if (statusCode !== 200) {
        setLoginError(true);
        setLoading(false);
        return;
      }

      setCookie("appSena", "true");
      setUserLogged(true);
    } else {
      setLoginError(true);
    }
  };

  return !userLogged ? (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-4">Iniciar sesión</h3>

                {loginError && (
                  <div className="alert alert-danger mb-4">
                    <p className="m-0">Verifique su email o contraseña.</p>
                  </div>
                )}

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    onKeyDown={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    placeholder="Contraseña"
                    onKeyDown={(event) => setPassword(event.target.value)}
                  />
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  onClick={() => signIn()}
                  disabled={isLoading}
                >
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Navigate to="/admin" replace={true} />
  );
};

export default LoginView;
