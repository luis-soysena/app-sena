import { useEffect, useState } from "react";
import { Modal, Search, Table } from "../../../components";
import { getCookie } from "../../../utils/cookies";
import AdminLayout from "../layout";
import {
  getSubscription,
  getAllSubscriptions,
  deleteSubscription,
  deleteUser,
} from "../../../services/api";

const DashboardView = () => {
  const { VITE_COOKIE_NAME } = import.meta.env;
  const userInfo = JSON.parse(getCookie(VITE_COOKIE_NAME));
  const userRol = ["Administrador", "Cliente"];
  const title =
    userInfo?.role === 0 ? "Suscripciones recientes" : "Mi suscripción";

  const [apiData, setApiData] = useState([]);
  const [showModal, setShowModal] = useState({
    param: null,
    show: false,
  });

  const getSubscriptionFromApi = async (email) => {
    const response = email
      ? await getSubscription(email)
      : await getAllSubscriptions();
    setApiData(response);
  };

  const deleteSub = async (email) => {
    const response = await deleteSubscription(email);

    if (response?.data?.code === 200) {
      await deleteUser(email);
      const subscriptions = await getAllSubscriptions();
      setApiData(subscriptions);
    }

    setShowModal({
      param: null,
      show: false
    })
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
      userInfo?.email && getSubscriptionFromApi(userInfo?.email);
    }
  }, []);

  return (
    <AdminLayout>
      {showModal.show && (
        <Modal setShowModal={setShowModal} deleteSub={deleteSub} email={showModal.param} />
      )}

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

          <Table
            data={apiData}
            userInfo={userInfo}
            setShowModal={setShowModal}
          />
        </div>
      </section>
    </AdminLayout>
  );
};

export default DashboardView;
