import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sha1 from "js-sha1";
import { formatInputDate } from "../../utils/format";
import { getUser, saveUser, saveSubscription, updateSubscription ,deleteSubscription } from "../../services/api";

const SubscriptionForm = ({ data }) => {
  const { VITE_PASSWD_HASH } = import.meta.env;
  const subscription = data?.data?.data;

  const [userEmail, setEmail] = useState(subscription?.email);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [price, setPrice] = useState(subscription?.price);
  const [startDate, setStartDate] = useState(
    subscription?.start_date && formatInputDate(subscription?.start_date)
  );
  const [endDate, setEndDate] = useState(
    subscription?.end_date && formatInputDate(subscription?.end_date)
  );
  const [isEmptyField, setEmptyField] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [errorOnSave, setErrorOnSave] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const saveSub = async (action = "save") => {
    if (!isEmptyField) {
      switch (action) {
        case "save":
          const subsRes = await saveSubscription({
            email: userEmail,
            price,
            start_date: new Date(startDate).toISOString(),
            end_date: new Date(endDate).toISOString(),
            status: 0
          });

          if (subsRes?.data?.code !== 200) {
            setErrorOnSave(true);
            return;
          }

          // Save user if subscription was saved!
          const userRes = await saveUser({
            email: userEmail,
            password: sha1(`${VITE_PASSWD_HASH}0a${password}`),
            name,
            role: 1
          });

          if (userRes?.data?.code !== 200) {
            setErrorOnSave(true);
            deleteSubscription(userEmail);
            return;
          }

          setErrorOnSave(false);
          setSaveSuccess(true);

          break;

        case "update":
          const subsUpdateRes = await updateSubscription({
            email: userEmail,
            price,
            start_date: new Date(startDate).toISOString(),
            end_date: new Date(endDate).toISOString(),
            status: 0
          });

          if (subsUpdateRes?.data?.code !== 200) {
            setErrorOnSave(true);
            return;
          }

          setErrorOnSave(false);
          setUpdateSuccess(true);
      
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (subscription) {
      const getNameByEmail = async () => {
        const response = await getUser(subscription?.email);
        setName(response?.data?.data?.name);
      };

      getNameByEmail();
    }
  }, [subscription]);

  useEffect(() => {
    if (!subscription) {
      setEmptyField(!userEmail || !name || !password || !price || !startDate || !endDate);
    } else {
      setEmptyField(!userEmail || !name || !price || !startDate || !endDate);
    }

    return () => setLoading(false);
  }, [userEmail, name, price, password, startDate, endDate]);

  return isLoading ? (
    <p>Cargando formulario...</p>
  ) : (
    <div className="subs-form">
      {!errorOnSave && isEmptyField && (
        <div className="alert alert-warning mb-4">
          Debe llenar todos los campos.
        </div>
      )}

      {errorOnSave && (
        <div className="alert alert-danger mb-4">
          <p className="m-0">Ha ocurrido un error. Verifique que el usuario no exista antes de crearlo.</p>
        </div>
      )}

      {!errorOnSave && (saveSuccess || updateSuccess) && (
        <div className="alert alert-success mb-4">
        <p className="m-0">Suscripción {updateSuccess ? "actualizada" : "guardada"} con éxito.</p>
      </div>
      )}


      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className={`form-control ${!name ? "is-invalid" : ""}`}
              placeholder="Nombre"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
              readOnly={subscription ? true : false}
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              className={`form-control ${!userEmail ? "is-invalid" : ""}`}
              placeholder="Email"
              autoComplete="off"
              defaultValue={subscription?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {!subscription && (
          <div className="col-12 col-md-6">
            <div className="form-group mb-3">
              <label htmlFor="name">Contraseña</label>
              <input
                type="password"
                className={`form-control ${!password ? "is-invalid" : ""}`}
                placeholder="Contraseña"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="col-12 col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="name">Fecha inicio</label>
            <input
              type="date"
              className={`form-control ${!startDate ? "is-invalid" : ""}`}
              placeholder="Fecha inicio"
              defaultValue={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Fecha vencimiento</label>
            <input
              type="date"
              className={`form-control ${!endDate ? "is-invalid" : ""}`}
              placeholder="Fecha vencimiento"
              defaultValue={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Precio</label>
            <input
              type="number"
              min="0"
              className={`form-control ${!price ? "is-invalid" : ""}`}
              placeholder="Precio"
              defaultValue={subscription?.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="form-buttons mt-5">
          {!subscription ? (
            <button className="btn btn-dark me-3" onClick={() => saveSub()}>
              <i className="bi bi-save me-2"></i>
              <span>Guardar</span>
            </button>
          ) : (
            <button className="btn btn-dark me-3" onClick={() => saveSub("update")}>
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
