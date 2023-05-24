import { Link } from "react-router-dom";

const SubscriptionForm = ({ data }) => {
  return (
    <div className="subs-form">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="name">Nombre</label>
            <input type="text" className="form-control" placeholder="Nombre" />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input type="email" className="form-control" placeholder="Nombre" autoComplete="off" />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="name">Contraseña</label>
            <input type="password" className="form-control" placeholder="Contraseña" autoComplete="off" />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="name">Fecha inicio</label>
            <input type="date" className="form-control" placeholder="Fecha inicio" />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Fecha vencimiento</label>
            <input type="date" className="form-control" placeholder="Fecha vencimiento" />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Precio</label>
            <input type="number" min="0" className="form-control" placeholder="Precio" />
          </div>
        </div>

        <div className="form-buttons mt-5">
          <button className="btn btn-dark me-3">
            <i className="bi bi-save me-2"></i>
            <span>Guardar</span>
          </button>

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
