import Layout from "../Layout/Layout";
import * as data from "../data";
import { useCart, useCartActions } from "../Providers/CartProdvicer";
import { checkInCart } from "../utils/checkInCart";
import { toast } from "react-toastify";
import "./HomePage.css";
import Banner from "../components/Banner/Banner";

const HomePage = ({props}) => {

  const { cart } = useCart();

  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    toast.success(`${product.name} added to cart !`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>


      <Banner/>
      <main className="container">

      <h3 className="sub-heading"> محصولات </h3>
    <h1 className="heading"> ویژه های مخصوص </h1>

        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>

                  <div className="prouductImg">
                    <img src={product.image} alt={product.name}></img>
                  </div>

                  <div className="productDesc">
                       <div> <h3>{product.name}</h3></div>
                     <div>   <p>گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نم</p></div>
                       <div><span className="price"> $ {product.price}</span>
                        <span className="offprice"> $ {product.offPrice}</span></div> 
                        <div><button
                          onClick={() => addProductHandler(product)}
                          className="btnProduct"
                        >
                          {checkInCart(cart, product) ? "ادامه ی سفارش" : "افزودن به سبد خرید"}
                        </button></div>
                  </div>


              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
