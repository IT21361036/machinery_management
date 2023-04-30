import AdminNavbar from "../../../components/admin-navbar/AdminNavbar";
import AdminSidebar from "../../../components/admin-sidebar/AdminSidebar";
import AdminAddNewUser from "../admin-add-new-user/AdminAddNewUser";
import AdminEditUser from "../admin-edit-user/AdminEditUser";
import "./adminAddEditUser.scss";

const AdminAddEditUser = ({ isEdit }) => {
  return (
    <div className="addEdit">
      <AdminSidebar />
      <div className="addEditContainer">
        <AdminNavbar />
        {isEdit ? <AdminEditUser /> : <AdminAddNewUser />}
      </div>
    </div>
  );
};

export default AdminAddEditUser;
