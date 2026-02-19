import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import UserEdit from "./components/UserEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/edit/user/:id" element={<UserEdit />}></Route>
      </Routes>
    </>
  );
}

export default App;
