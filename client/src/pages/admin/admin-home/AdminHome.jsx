import "./adminHome.scss";
import AdminSidebar from "../../../components/admin-sidebar/AdminSidebar";
import Widget from "../../../components/widget/Widget";
import Chart from "../../../components/chart/Chart";
import Table from "../../../components/table/Table";
import PDFReport from "../../../components/PDFReport/PDFReport";
import AdminNavbar from "../../../components/admin-navbar/AdminNavbar";
import AdminFeatured from "../../../components/admin-featured/AdminFeatured";

const AdminHome = () => {
  return (
    <div className="adminHome">
      <AdminSidebar />
      <div className="adminHomeContainer">
        <AdminNavbar />
      <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
       
        <div className="charts">
          <AdminFeatured />
          <Chart title="Last 6 Months (Estimated Time)" aspect={2 / 1} />
        </div>

        <div className="reports">
          <PDFReport title="Generating Reports"/>
        </div>

        <div className="listContainer">
          <div className="listTitle">System Operators</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
