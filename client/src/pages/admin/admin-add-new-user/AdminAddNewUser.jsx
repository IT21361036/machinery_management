import "./admin-add-new-user.scss";
import AdminSidebar from "../../../components/admin-sidebar/AdminSidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import AdminNavbar from "../../../components/admin-navbar/AdminNavbar";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../axios";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { userInputs } from "../../../formSource";

const AdminAddNewUser = () => {
  const [file, setFile] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    data.img =
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600";
    try {
      await axiosInstance.post("/auth/register", data);
      navigate("/admin/users");
    } catch (e) {}
  };

  return (
    <div className="new">
      <AdminSidebar />
      <div className="newContainer">
        <AdminNavbar />
        <div className="top">
          <h1>Add New User</h1>
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
            <form onSubmit={handleSubmit(onSubmit)}>
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

              {userInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    {...register(input.name, {
                      required: "This field is required",
                      pattern: input.pattern,
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name={input.name}
                    render={({ message }) => (
                      <p className="formError">{message}</p>
                    )}
                  />
                </div>
              ))}
              <button type="submit">Add User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddNewUser;
