const AdminFooter = () => {
  const { VITE_APP_NAME, VITE_APP_VERSION } = import.meta.env;

  return (
    <>
      <hr className="text-dark m-0" />
      <footer className="pt-4 pb-2 text-center">
        <p className="m-0">
          <small>
            { VITE_APP_NAME } &bull; Versión {VITE_APP_VERSION}
          </small>
        </p>
      </footer>
    </>
  );
};

export default AdminFooter;
