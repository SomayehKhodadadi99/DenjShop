
import Footer from "../components/Footer/Footer";
import Navigation1 from "../components/Navigation/Navigation1";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation1 />
      {children}
      <Footer/>
      
    </div>
  );
};

export default Layout;
