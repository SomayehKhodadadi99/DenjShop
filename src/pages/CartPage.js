import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProdvicer";
import "./cartPage.css";
import trashIcon from "../../src/assets/icons/trash.svg";
import CartEmpty from "../components/CartEmpty/CartEmpty";
const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  if (!cart.length)
    return (
      <Layout>
        <main>
  
             <CartEmpty/>

        </main>
      </Layout>
    );

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  return (
    <Layout>
      <main className="container">
        <section className="cartCenter">
          <section className="cartItemList">
            {cart.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                      <div className="itemImg">
                        <img src={item.image}  alt={item.name}></img>
                      </div>

                   
                      <div className="data">
                          <h3>{item.name}</h3>
                          <p>{item.offPrice * item.quantity} </p>
                     </div>

                     <div>
                           <span className="quantity">{item.quantity}</span>
                     </div>


                      <div className="btnGroup">
                        {
                          item.quantity >1 ? <button className="symble" onClick={() => decHandler(item)}>- </button>:
                          
                          <button onClick={() => decHandler(item)}>  <img src={trashIcon} alt="trash" /> </button>
                        
                        }
                     <button className="symble" onClick={() => incHandler(item)}>+</button>
                     
                      </div>
                </div>
              );
            })}
          </section>
          <CartSummery cart={cart} total={total} />
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;

const CartSummery = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  return (
    <section className="cartSummery">
      <h2 style={{ marginBottom: "30px" }}>صورت حساب</h2>
      <div className="summeryItem">
        <p>قیمت واقعی</p>
        <p><span>{originalTotalPrice} $</span> </p>
      </div>
      <div className="summeryItem">
        <p>تخفیف </p>
        <p><span>{originalTotalPrice - total} $</span></p>
      </div>

      <div className="summeryItem net">
        <p>مبلغ پرداختی</p>
        <p> <span>{total} $</span></p>
      </div>
     
       <Link className="buttonContainer" to="/signup?redirect=checkout"> 
      {/* <Link to="/checkout" className="buttonContainer"> */}

        <button
          className="checkout"
         
        >
         تکمیل سفارش
        </button>
        {/* onClick={() => dispatch({type: "CLEAR"})} */}
        <button className="clear" >حذف</button>
      </Link>
    
    </section>
  );
};
