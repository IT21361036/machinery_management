import "./admin-add-new-user.scss";
import AdminSidebar from "../../../components/admin-sidebar/AdminSidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import AdminNavbar from "../../../components/admin-navbar/AdminNavbar";

const AdminAddNewUser = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <AdminSidebar />
      <div className="newContainer">
        <AdminNavbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    required={input.required}
                  />
                </div>
              ))}
              <button>Add User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddNewUser;
