import { useState } from "react";

const Search = ({ getData }) => {
  const [email, setEmail] = useState(null);

  return (
    <div className="search mb-4">
      <h4>Buscar suscripción</h4>
      <div className="row">
        <div className="col-9 col-lg-10">
          <input
            type="email"
            placeholder="Ingrese e-mail"
            className="form-control"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="col-3 col-lg-2 text-end text-lg-start">
          <button className="btn btn-dark" onClick={() => getData(email)}>
            <i className="bi bi-search me-1 me-md-2"></i>
            <span>Buscar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
