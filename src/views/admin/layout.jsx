import AdminFooter from "./common/footer";
import AdminHeader from "./common/header";

import "./styles.scss";

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
