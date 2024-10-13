import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
