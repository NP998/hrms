import { Formik } from "formik";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {useFormik} from "formik";
import * as yup from "yup";
import React from "react";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    validationSchema: yup.object().shape({
        email: yup
          .string()
          .required("Email cannot be empty")
          .email("Invalid email"),
        password: yup
          .string()
          .required("Password cannot be empty")
          .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Weak Password"),
      }),
      onSubmit: (values) => {
        console.log(values);
        loginClickHandler();
      },
    });
    //1when we click on loginClickhandler then jwt token store in local storage and move to dashboard
    const loginClickHandler=()=>{
        //2api call is made-return
         const jwtToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        //3now store in local storage
        localStorage.setItem("access-token",jwtToken)
        //4 
        // props.setIsLoggedIn(true)
       props.history.push("/")
    }
    
    const onBlur = (name) =>{
        formik.setFieldTouched(name,true)
    }
  
    const onChangeHandler = (name,value) =>{
        formik.setFieldValue(name,value)
    }
    return(
        <div className="login">
            <div className="form-container">
                <div className="header-band">HRMS</div>
                <form className="form" onSubmit={formik.handleSubmit}>
          <div>
            <Input
              name="email"
              classes={{
                inputComponentClass: "login-input",
              }}
              value={formik.values.email}
              onChange={(event) => onChangeHandler(event.target.name,event.target.value)}
              type="email"
              placeholder="Enter email"
              onBlur={(event) => onBlur(event.target.name)}
              onFocus={() => console.log("On Focus")}
              errors={formik.errors.email}
            />
            <Input
              name="password"
              classes={{
                inputComponentClass: "login-input",
              }}
              value={formik.values.password}
              onChange={(event) => onChangeHandler(event.target.name,event.target.value) }
              //   type="password"
              placeholder="Enter password"
              onBlur={(event) => onBlur(event.target.name)}
              errors={formik.errors.password}
            />
          </div>
            <Button type="button" classname="login-button">
            Login
          </Button>
        </form>
            </div>
        </div>
    )
}

export default Login;