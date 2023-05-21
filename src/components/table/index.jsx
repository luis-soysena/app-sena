import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Table = ({ userInfo, data }) => {
  const subscriptions = data?.data?.data.email
    ? [data?.data?.data]
    : data?.data?.data;

  const status = [
    {
      label: "Inactiva",
      className: "bg-inactive",
    },
    {
      label: "Activa",
      className: "bg-active",
    },
  ];

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (subscriptions?.length) setLoading(false);
  }, [subscriptions]);

  return isLoading ? (
    <p className="m-0">Cargando información...</p>
  ) : (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr className="bg-dark text-light text-center">
            <th scope="col">
              <i className="bi bi-envelope m-2"></i>
              <small className="d-block">Email</small>
            </th>
            <th scope="col">
              <i className="bi bi-patch-check m-2"></i>
              <small className="d-block">Estado</small>
            </th>
            <th scope="col">
              <i className="bi bi-calendar2-check m-2"></i>
              <small className="d-block">Desde</small>
            </th>
            <th scope="col">
              <i className="bi bi-calendar2-x m-2"></i>
              <small className="d-block">Hasta</small>
            </th>
            <th scope="col">
              <i className="bi bi-gear m-2"></i>
              <small className="d-block">Opciones</small>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.data ? (
            subscriptions.map((subscription, index) => (
              <tr
                key={`sub-${index}`}
                className={`
                  text-center
                  ${status[subscription?.status].className}
                `}
              >
                <td scope="row">{subscription?.email}</td>
                <td>{status[subscription?.status].label}</td>
                <td>
                  {new Date(subscription?.start_date).toLocaleDateString(
                    "es-CO"
                  )}
                </td>
                <td>
                  {new Date(subscription?.end_date).toLocaleDateString("es-CO")}
                </td>
                <td>
                  <Link
                    to={`/admin/subscription/edit/${subscription?.email}`}
                    className="btn btn-sm btn-primary"
                    title="Editar"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </Link>
                  {userInfo?.role === 0 && (
                    <Link
                      to={`/admin/subscription/delete/${subscription?.email}`}
                      className="ms-2 btn btn-sm btn-danger"
                      title="Eliminar"
                    >
                      <i className="bi bi-trash"></i>
                    </Link>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={userInfo?.role === 0 ? 6 : 5}>
                <p className="alert alert-warning m-0">
                  No hay subscripciones registradas en la base de datos.
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
