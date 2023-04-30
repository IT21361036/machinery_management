import "./admin-edit-user.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { userInputs } from "../../../formSource";

const AdminEditUser = () => {
  const [file, setFile] = useState("");
  const { state: user } = useLocation();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
    },
  });

  const onSubmit = async (data) => {
    data.img =
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600";
    try {
      await axiosInstance.put(`/users/${user._id}`, data);
      navigate("/admin/users");
    } catch (e) {}
  };

  useEffect(() => {
    console.log(user);
    if (!user?._id) navigate("/admin/users");
  }, [navigate, user?._id]);

  return (
    <>
      <div className="top">
        <h1>Edit User</h1>
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

            {userInputs
              .filter((user) => user.id !== "password")
              .map((input) => (
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
    </>
  );
};

export default AdminEditUser;
