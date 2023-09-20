import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProdvicer";
import styles from "./checkout.module.css";
import { Link } from "react-router-dom";
const Checkout = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main className="container">
        <Link to="/"> go to shoppung? </Link>
      </main>
    );

  return (
    <main className={styles.container}>
      <section className={styles.cartCenter}>
      {auth ? (
          <>
            <section className={styles.cartSummery}>
              <div className={styles.title}><h4>اطلاعات سبد خرید</h4></div>
              {cart &&
                cart.map((c,index) => {
                  return (
                    <div key={index} className={styles.divcontain}>
                      <span className={styles.name}>{c.name}</span><span className={styles.symbol} >*</span>  <span className={styles.qty}>{c.quantity}</span> <span className={styles.symbol}>:</span> <span className={styles.qprice}>{c.quantity * c.offPrice}</span>
                    </div>
                  );
                })}
          
              <div className={styles.pay}> پرداختی <span style={{marginRight:"10px",textAlign:"center"}}>{total}</span> </div>
            </section>
            <section className={styles.cartItemList}>
                <div className={styles.title}>  <h4>اطلاعات خریدار </h4></div>

                        <p  className={styles.name}>نام و نام خانوادگی : <span style={{color:"silver",fontSize:"1.5rem"}}>سمیه خدادادی</span></p>
                        <p  className={styles.name}>ایمیل  : {auth.email} <span style={{color:"silver",fontSize:"1.5rem"}}>سمیه خدادادی@gmail.com</span></p>
                        <p  className={styles.name}>تلفن تماس: {auth.phoneNumber} <span style={{color:"silver",fontSize:"1.5rem"}}>09129658477</span></p>
            </section>        
            </>
        ) : (
          <p>لطفا وارد شوید</p>
        )}

      </section>
    </main>
  );
};

export default Checkout;
