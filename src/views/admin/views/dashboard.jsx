import { useEffect, useState } from "react";
import { Search, Table } from "../../../components";
import { getCookie } from "../../../utils/cookies";
import AdminLayout from "../layout";
import { getSubscription, getAllSubscriptions } from "../../../services/api";

const DashboardView = () => {
  const { VITE_COOKIE_NAME } = import.meta.env;
  const userInfo = JSON.parse(getCookie(VITE_COOKIE_NAME));
  const userRol = ["Administrador", "Cliente"];
  const title =
    userInfo?.role === 0 ? "Suscripciones recientes" : "Mi suscripción";

  const [apiData, setApiData] = useState([]);

  const getSubscriptionFromApi = async (email) => {
    const response = await getSubscription(email);
    setApiData(response);
  };

  useEffect(() => {
    // Admin
    if (!apiData.length && userInfo?.role === 0) {
      const getSubscriptions = async () => {
        const response = await getAllSubscriptions();
        setApiData(response);
      };

      getSubscriptions();
    }

    // User
    if (!apiData.length && userInfo?.role > 0) {
      getSubscriptionFromApi(userInfo?.email);
    }
  }, []);

  return (
    <AdminLayout>
      <section className="dashboard pt-4 pb-4">
        <div className="container">
          <div className="dashboard__title mb-4">
            <h3 className="mb-0">Hola, {userInfo?.name}</h3>
            <p className="m-0">
              <strong>Rol</strong>: {userRol[userInfo?.role]}
            </p>
          </div>

          {userInfo?.role === 0 && (
            <div className="dashboard__search">
              <Search getData={getSubscriptionFromApi} />
            </div>
          )}

          <h4 className="mb-3">{title}</h4>

          <Table data={apiData} userInfo={userInfo} />
        </div>
      </section>
    </AdminLayout>
  );
};

export default DashboardView;
