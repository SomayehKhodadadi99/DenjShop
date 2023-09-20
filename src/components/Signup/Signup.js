import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Link, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { signupUser } from "../../services/sinupService";
import { useAuthActions, useAuth } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";
import style from "./signup.module.css";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};
// 2.

// 3.
const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام الزامی است")
    .min(6, "طول نام کافی نمی باشد"),
  email: Yup.string()
    .email("فرمت ایمیل درست نمی باشد")
    .required("ایمیل الزامی است"),
  phoneNumber: Yup.string()
    .required("تلفن تماس الزامی می باشد")
    .matches(/^[0-9]{11}$/, "شماره تماس صحیح نمی باشد")
    .nullable(),
  password: Yup.string().required("رمز عبور الزامی می باشد"),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // )
  passwordConfirm: Yup.string()
    .required("تکرار رمز الزامی می باشد")
    .oneOf([Yup.ref("password"), null], "رمز عبور تطابق ندارد"),
});

const SignupForm = ({ history }) => {
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const setAuth = useAuthActions();
  const auth = useAuth();
  const [error, setError] = useState(null);
  useEffect(() => {
    if (auth) history.push(redirect);
  }, [redirect, auth]);

  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    // console.log(values);
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      history.push(redirect);
    } catch (error) {
      // console.log(error.response.data.message);
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className={style.container}>
      <form className={style.formContainer} onSubmit={formik.handleSubmit}>
      <h2 className={style.header}>ثبت نام</h2>
        <Input formik={formik} name="name" label="نام" />
        <Input formik={formik} name="email" label="ایمیل" type="email" 
          //  className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
        />
        <Input
          formik={formik}
          name="phoneNumber"
          label="تلفن تماس"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="رمز عبور"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="تکرار رمز عبور"
          type="password"
        />
        <div >
              <button
                style={{ width: "100%" }}
                type="submit"
                disabled={!formik.isValid}
                className={ `${style.btn} ${style.primary}`}
               >
                ثبت نام
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <p>
              <Link  to={`/login?redirect=${redirect}`}>
                <p style={{ marginTop: "15px" }}>قبلا ثبت نام کرده ام </p>
              </Link>
              </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignupForm);
