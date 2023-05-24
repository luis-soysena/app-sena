import AdminLayout from "../../layout";
import SubscriptionForm from "../../../../components/subsForm";

const NewSubscriptionView = ({ edit }) => {
  return (
    <AdminLayout>
      <div className="container pt-4 pb-4">
        <h2>{!edit ? "Nueva" : "Editar"} suscripción</h2>
        <SubscriptionForm />
      </div>
    </AdminLayout>
  );
};

export default NewSubscriptionView;
