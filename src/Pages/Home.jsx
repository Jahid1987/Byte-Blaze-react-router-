import { Outlet } from "react-router-dom";
import Nav from "../Coponents/Nav";
import Footer from "../Coponents/Footer";

const Home = () => {
  return (
    <>
      <div className="h-16">
        <Nav></Nav>
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
