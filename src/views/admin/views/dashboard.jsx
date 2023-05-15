import { getCookie } from "../../../utils/cookies";
import AdminLayout from "../layout";

const DashboardView = () => {
  const { VITE_COOKIE_NAME } = import.meta.env;
  const userInfo = JSON.parse(getCookie(VITE_COOKIE_NAME));
  const userRol = userInfo?.role > 0 ? "Cliente" : "Administrador";
  return (
    <AdminLayout>
      <section className="admin-dashboard pt-4 pb-4">
        <div className="container">
          <h3 className="mb-0">Hola, {userInfo?.name}</h3>
          <p className="m-0"><strong>Usuario</strong>: {userRol}</p>
        </div>
      </section>
    </AdminLayout>
  );
};

export default DashboardView;
