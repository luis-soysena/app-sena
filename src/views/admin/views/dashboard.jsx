import { useEffect, useState } from "react";
import { Search, Table } from "../../../components";
import { getCookie } from "../../../utils/cookies";
import AdminLayout from "../layout";
import { getSubscription } from "../../../services/api";

const DashboardView = () => {
  const { VITE_COOKIE_NAME } = import.meta.env;
  const userInfo = JSON.parse(getCookie(VITE_COOKIE_NAME));
  const userRol = userInfo?.role === 0 ? "Administrador" : "Cliente";

  const [apiData, setApiData] = useState([]);

  const getSubscriptionFromApi = async (email) => {
    const response = await getSubscription(email);
    setApiData(response);
  }

  return (
    <AdminLayout>
      <section className="dashboard pt-4 pb-4">
        <div className="container">
          <div className="dashboard__title mb-4">
            <h3 className="mb-0">Hola, {userInfo?.name}</h3>
            <p className="m-0"><strong>Usuario</strong>: {userRol}</p>
          </div>

          <div className="dashboard__search">
            <Search getData={getSubscriptionFromApi} />
            <Table
              data={apiData}
              role={userInfo?.role}
            />
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default DashboardView;
