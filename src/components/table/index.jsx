import { Link } from "react-router-dom";

import "./styles.scss";

const Table = ({ role, data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Nombre</th>
            <th scope="col" className="text-center">Suscripción</th>
            <th scope="col" className="text-center">Inicio</th>
            <th scope="col" className="text-center">Vence</th>
            {role === 0 && (
              <th scope="col" className="text-end">
                Opciones
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">luchowebcom@gmail.com</td>
            <td>Luis Rodriguez</td>
            <td className="text-center">Activa</td>
            <td className="text-center">01-02-2023</td>
            <td className="text-center">01-08-2023</td>
            {role === 0 && (
              <td className="text-end">
                <Link className="text-primary me-3" title="Editar">
                  <i className="bi bi-pencil"></i>
                </Link>
                <Link className="text-danger" title="Eliminar">
                  <i className="bi bi-trash"></i>
                </Link>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
