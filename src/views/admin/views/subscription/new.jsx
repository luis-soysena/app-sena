import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../layout";
import SubscriptionForm from "../../../../components/subsForm";

const NewSubscriptionView = () => {
  const { email } = useParams();
  const [subscription, setSubscription] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!email) {
      setSubscription([]);
      setLoading(false);
    } else {
      // get data
    }
  }, []);

  return (
    <AdminLayout>
      <div className="container pt-5 pb-5">
        <h2 className="mb-4">{!email ? "Nueva" : "Editar"} suscripción</h2>
        {isLoading ? (
          <p>Cargando información...</p>
        ) : (!subscription ? (
            <p>No existe una suscripción con el correo ingresado.</p>
          ) : (
            <SubscriptionForm data={subscription} />
          )
        )}
      </div>
    </AdminLayout>
  );
};

export default NewSubscriptionView;
