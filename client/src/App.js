import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/login";
import AdminHome from "./pages/admin/admin-home/AdminHome";
import Single from "./pages/admin/single/Single";
import UserList from "./pages/admin/list/List";
import NewUser from "./pages/admin/new/New";
import { userInputs } from "./formSource";
import ProtectedRoute from "./components/protected-route/protected-route.component";

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
          path="admin/:userId"
          element={
            <ProtectedRoute>
              <Single />
            </ProtectedRoute>
          }
        />
        <Route
          path="new"
          element={
            <ProtectedRoute>
              <NewUser inputs={userInputs} title="Add New User" />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
