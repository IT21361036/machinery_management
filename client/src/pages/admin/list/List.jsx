import "./list.scss";
import AdminSidebar from "../../../components/admin-sidebar/AdminSidebar";
import Datatable from "../../../components/datatable/Datatable";
import AdminNavbar from "../../../components/admin-navbar/AdminNavbar";

const List = () => {
  return (
    <div className="adminHome">
      <AdminSidebar />
      <div className="adminHomeContainer">
        <AdminNavbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
