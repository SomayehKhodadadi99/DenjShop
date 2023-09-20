import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeslider}>
        <div className={styles.wrapper}>

          <div className={styles.slide}>


            <div className={styles.image}>
              <img src="../../images/Indian-Food-PNG-Photos.png" alt="" />
            </div>

            <div className={styles.content}>
              <span>غذای مخصوص ما</span>
              <h3>spicy نودل</h3>
              <p>اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نم</p>
              <Link to="/" className={styles.btn}>سفارش بده</Link>
            </div>
          </div>


        </div>


      </div>
    </section>

  );
};

export default Banner;