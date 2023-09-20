import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <section className={styles.footer}>

            <div className={styles.boxcontainer}>

                <div  className={styles.box}>
                    <h3>ما در اینجا هستیم</h3>
                    <Link to="/"> <i className="fas fa-map-marker-alt"></i> ایران </Link>
                    <img style={{borderStyle:'none',outline:'none'}} className={styles.map} alt=""/>
                </div>


                <div className={styles.box}>
                    <h3>تماس با ما</h3>
                    <Link to="/"> <i className="fas fa-phone"></i> +123-456-7890 </Link>
                    <Link to="/">  <i className="fas fa-phone"></i> +111-222-3333</Link>
                    <Link to="/">  <i className="fas fa-envelope"></i> khodadadi.somayeh99@gmail.com </Link>
                  
                </div>
            </div>

        

            <div className={styles.credit}> طراحی شده با  <span> <Link to="/" style={{color:'red',padding:"10px"}} className="fas fa-heart"></Link> سمیه خدادادی </span> </div>

        </section>
    );

}

export default Footer;