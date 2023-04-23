import "./adminHome.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Widget from "../../../components/widget/Widget";
import Featured from "../../../components/featured/Featured";
import Chart from "../../../components/chart/Chart";
import Table from "../../../components/table/Table";
import PDFReport from "../../../components/PDFReport/PDFReport";

const AdminHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
       
        <div className="charts">
          <Featured />
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
