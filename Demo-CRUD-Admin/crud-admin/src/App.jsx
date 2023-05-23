import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutNavbar from "./components/layout/LayoutNavbar";
import AboutPage from "./components/page/AboutPage";
import ContactPage from "./components/page/ContactPage";
import HomePage from "./components/page/HomePage";
import NotFound from "./components/page/NotFound";
import AddUser from "./components/user/AddUser";

function App() {
  return (
    <div>
      <LayoutNavbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/user/add" element={<AddUser />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
