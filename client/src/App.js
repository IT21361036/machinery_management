import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/login";
import AdminHome from "./pages/admin/admin-home/AdminHome";
import Single from "./pages/admin/single/Single";
import UserList from "./pages/admin/list/List";
import NewUser from "./pages/admin/new/New";
import { productInputs, userInputs } from "./formSource";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin">
          <Route index element={<AdminHome />} />
          <Route path="users" element={<UserList />} />
          <Route path="admin/:userId" element={<Single />} />
          <Route
            path="new"
            element={<NewUser inputs={userInputs} title="Add New User" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
