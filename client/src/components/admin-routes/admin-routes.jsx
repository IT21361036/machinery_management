import AdminHome from "../../pages/admin/admin-home/AdminHome";
import Single from "../../pages/admin/single/Single";
import UserList from "../../pages/admin/list/List";
import NewUser from "../../pages/admin/new/New";
import { userInputs } from "../../formSource";
import { Fragment, useContext, useEffect } from "react";
import { TokenContext } from "../../context/TokenContext";
import { Route, useNavigate } from "react-router-dom";

const AdminRoutes = () => {
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/login");
  });

  return (
    <Fragment>
      <Route path="/admin">
        <Route index element={<AdminHome />} />
        <Route path="users" element={<UserList />} />
        <Route path="admin/:userId" element={<Single />} />
        <Route
          path="new"
          element={<NewUser inputs={userInputs} title="Add New User" />}
        />
      </Route>
    </Fragment>
  );
};

export default AdminRoutes;
