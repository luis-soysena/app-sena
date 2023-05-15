import AdminHeader from "./common/header";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminHeader />
      { children }
    </>
  )
}

export default AdminLayout;
