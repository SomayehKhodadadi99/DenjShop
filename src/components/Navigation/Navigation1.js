import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProdvicer";
import "./Navigation1.css";
import shopIcon from "../../assets/icons/shop.svg";
import loginIcon from "../../assets/icons/login-svgrepo-com.svg";
import userIcon from "../../assets/icons/user-svgrepo-com.svg";
import { useEffect, useState, useRef } from "react";
import menuIcon from "../../assets/icons/icons8-menu.svg";

const Navigation1 = () => {
  const { cart } = useCart();
  const userData = useAuth();

  const stickyHeader = useRef();

  const [isOpen, setIsOpen] = useState(false);
  // useEffect(()=>{

  //   const mainHeader = document.querySelector('.header-3');
  //    console.log(mainHeader);
  //   let fixedTop = stickyHeader.current.offsetTop;
  //   console.log('fixedTop',fixedTop);
  //   console.log('window.pageYOffset ',window.pageYOffset);

  //   const fixedHeader = () => {
  //     if (window.pageYOffset > fixedTop) {
  //       mainHeader.classList.add('active');
  //     } else {
  //       mainHeader.classList.remove('active');
  //     }
  //   }
  //   window.addEventListener('scroll', fixedHeader);
  // },[]);

  useEffect(() => {
    const mainHeader = document.querySelector(".header-3");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 125) {
        mainHeader.classList.add("active");
        // console.log("ok");
      } else {
        // console.log("not ok");
        mainHeader.classList.remove("active");
      }
    });
  }, []);

  return (
    <div>
      <div className="header-1">
        <div className="share">
          <span> ما را دنبال کنید</span>
          <Link to="/" className="fab fa-facebook-f"/>
          <Link to="/" className="fab fa-twitter"/>
          <Link to="/" className="fab fa-instagram"/>
          <Link to="/" className="fab fa-linkedin"/>
        </div>

        <div className="call">
          <span> تلفن ما</span>
          <Link to="/">46467-69-0912</Link>
        </div>
      </div>

      <div className="header-2">
     
      <Link to="/" className="logo">
          <i className="fas fa-utensils"></i> دنج{" "}
      </Link>

        <form action="" className="search-bar-container">
          <input type="search" id="search-bar" placeholder="جستجو"></input>
          <label htmlFor="search-bar" className="fas fa-search"></label>
        </form>
      </div>

      <div className="header-3" ref={stickyHeader}>
        <div className="Navbar">
                  <nav className={`navUl ${isOpen && "open"}`}>
                    <ul>
                      <li>
                        {" "}
                        <NavLink to="/" activeClassName="activeLink" exact>
                          صفحه ی اصلی
                        </NavLink>
                      </li>
                      <li>
                        {" "}
                        <NavLink to="/cart" activeClassName="activeLink">
                          محصولات ما
                        </NavLink>
                      </li>
                      <li>
                        {" "}
                        <NavLink to="/login" activeClassName="activeLink">
                          تماس با ما
                        </NavLink>
                      </li>
                    </ul>
                  </nav>

                  <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}>
                        <div className="bar"></div>
                  </div>
        </div>

        <div className="maincontainer">
          <div className="iconContainer">
            <NavLink
              to="/cart"
              style={{ position: "relative" }}
              className="shop fas fa-shopping-cart"
            ></NavLink>
            <span className="spanContainer">{cart.length}</span>
          </div>

          <div className="userContainer">
            <NavLink to={userData ? "/profile" : "/login"}>
              {userData ? (
                <Link to="/profile" className="userLogin">
                  <img className="imguser" src={userIcon} />
                </Link>
              ) : (
                <div>
                  <Link to="/login" className="loginContainer">
                    <img className="iconlogin imglogin" src={loginIcon} />
                    <h4 style={{ position: "relative" }} className="login" >ورود</h4>
                  </Link>
                </div>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation1;
