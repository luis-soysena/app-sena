import AdminFooter from "./common/footer";
import AdminHeader from "./common/header";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminHeader />
      { children }
      <AdminFooter />
    </>
  )
}

export default AdminLayout;
