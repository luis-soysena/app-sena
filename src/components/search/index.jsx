import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ getData }) => {
  const [email, setEmail] = useState(null);

  return (
    <div className="search mb-4">
      <h4>Buscar suscripción</h4>
      <div className="row">
        <div className="col-8 col-md-5 col-lg-7">
          <input
            type="email"
            placeholder="Ingrese e-mail"
            className="form-control"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="col-4 col-md-3 col-lg-2 text-end text-md-start">
          <button className="btn btn-dark" onClick={() => getData(email)}>
            <i className="bi bi-search me-1 me-md-2"></i>
            <span>Buscar</span>
          </button>
        </div>

        <div className="col-12 col-sm-4 col-lg-3 text-center text-md-end mt-4 mt-md-0">
          <Link to="/admin/subscription/new" className="btn btn-success">
            <i className="bi bi-plus me-1 me-md-2"></i>
            <span>Nueva suscripción</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
