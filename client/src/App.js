import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/login";
import AdminHome from "./pages/admin/admin-home/AdminHome";
import SingleUser from "./pages/admin/single-user/SingleUser";
import UserList from "./pages/admin/list/List";
import ProtectedRoute from "./components/protected-route/protected-route.component";
import AdminAddEditUser from "./pages/admin/admin-add-edit-user/AdminAddEditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/users/:userId"
          element={
            <ProtectedRoute>
              <SingleUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/users/:userId/edit"
          element={
            <ProtectedRoute>
              <AdminAddEditUser isEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users/new"
          element={
            <ProtectedRoute>
              <AdminAddEditUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
