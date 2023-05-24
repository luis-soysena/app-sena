import { Link } from "react-router-dom";
import AdminFooter from "./admin/common/footer";
import AdminHeader from "./admin/common/header";

const NotFoundView = () => {
  return (
    <>
    <AdminHeader />
      <section className="container text-center pt-5 pb-5">
        <h1>
          <span>Error 404</span>
          <small className="d-block">
            Página no encontrada!
          </small>
        </h1>
        <Link to="/admin">Volver atrás</Link>
      </section>

      <AdminFooter />
    </>
  );
};

export default NotFoundView;
