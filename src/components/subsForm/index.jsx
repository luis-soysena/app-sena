import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../services/api";
import { formatInputDate } from "../../utils/format";

const SubscriptionForm = ({ data }) => {
  const subscription = data?.data?.data;
  const status = 0;
  const [userEmail, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [price, setPrice] = useState(null);
  const [startDate, setStartDate] = useState(formatInputDate(subscription?.start_date));
  const [endDate, setEndDate] = useState(formatInputDate(subscription?.end_date));

  const saveSub = () => {
    // Save user

    // Save subscription if user is save!
    // date.toISOString() to save on mongodb
  }

  useEffect(() => {
    if ( subscription ) {
      const getNameByEmail = async () => {
        const response = await getUser(subscription?.email);
        setName(response?.data?.data?.name);
      }

      getNameByEmail();
    }
  }, [subscription]);

  return (
    <div className="subs-form">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="name">Nombre</label>
            <input type="text" className="form-control" placeholder="Nombre" defaultValue={name} />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input type="email" className="form-control" placeholder="Nombre" autoComplete="off" defaultValue={subscription?.email} />
          </div>
        </div>

        {!subscription && (
          <div className="col-12 col-md-6">
            <div className="form-group mb-3">
              <label htmlFor="name">Contraseña</label>
              <input type="password" className="form-control" placeholder="Contraseña" autoComplete="off" />
            </div>
          </div>
        )}

        <div className="col-12 col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="name">Fecha inicio</label>
            <input type="date" className="form-control" placeholder="Fecha inicio" defaultValue={startDate} />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Fecha vencimiento</label>
            <input type="date" className="form-control" placeholder="Fecha vencimiento" defaultValue={endDate} />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Precio</label>
            <input type="number" min="0" className="form-control" placeholder="Precio" defaultValue={subscription?.price} />
          </div>
        </div>

        <div className="form-buttons mt-5">
          {!subscription ? (
            <button className="btn btn-dark me-3">
              <i className="bi bi-save me-2"></i>
              <span>Guardar</span>
            </button>
          ) : (
            <button className="btn btn-dark me-3">
              <i className="bi bi-save me-2"></i>
              <span>Actualizar</span>
            </button>
          )}

          <Link to="/admin" className="btn btn-secondary">
            <i className="bi bi-arrow-left me-2"></i>
            <span>Cancelar</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SubscriptionForm;
