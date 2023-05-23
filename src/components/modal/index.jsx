import { useState } from "react";
import "./styles.scss";

const Modal = ({ setShowModal, deleteSub, email }) => {
  return (
    <div className="modal-alert">
      <div className="modal-box bg-light p-3">
        <h4>
          <i className="bi bi-exclamation-diamond"></i>
          <span className="ms-2 mb-2">Advertencia</span>
        </h4>
        <p>¿Seguro que desea eliminar la suscripción?</p>
        <hr />
        <button
          className="btn btn-danger me-2"
          onClick={() => deleteSub(email)}
        >
          Si, eliminar!
        </button>
        <button
          className="btn btn-secondary"
          onClick={() =>
            setShowModal({
              param: null,
              show: false,
            })
          }
        >
          No, cancelar!
        </button>
      </div>
    </div>
  );
};

export default Modal;
