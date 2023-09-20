import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CartProvider from "./Providers/CartProdvicer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/ChekcoutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthProvider from "./Providers/AuthProvider";
import {  useState } from "react";

function App(props) {

  const [scrollClass,setScrollClass]=useState(false);


//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 125) {
//             // setShowTopBtn(true);
//             setScrollClass(true);
//             console.log("ok");
//         } else {
//             // setShowTopBtn(false);
//             console.log("not ok");
//             setScrollClass(false);
//         }
//     });
// }, []);



  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <ToastContainer />
          <Switch>
            <Route path="/cart" component={CartPage} />

            <Route path="/checkout" component={CheckoutPage} />

            <Route path="/login" component={LoginPage} />

            <Route path="/signup" component={SignupPage} />

            <Route path="/" component={HomePage} />
          </Switch>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;