import React from "react";
import Styles from "./cartEmpty.module.css";
import { Link } from "react-router-dom";


const CartEmpty=()=>
{

return(
    <div className={Styles.emptyContainer}>
     <div className={Styles.formContain}>
        <div className={Styles.emptytitle}>

            <h1>سبد خرید شما خالی می باشد</h1>

        </div>

    
          
          <Link  className={Styles.buttonEmpty} to="/">
            <button >صفحه ی اصلی</button>
          </Link>

      </div> 

    </div>);

}
export default CartEmpty;
        
