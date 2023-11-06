import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import frame from "../../assets/images/Frame.png";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import "./Login.scss";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a correct email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (value: any) => {
    console.log(value, "value");

    const admin_email = process.env.REACT_APP_EMAIL;
    const admin_password = process.env.REACT_APP_PASSWORD;
    console.log("value", admin_email, admin_password);
    if (admin_email === value.email && admin_password === value.password) {
      navigate("/home");
      //navigate("/strategy")
    } else {
      alert("Incorrect credentials");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row h-screen loginMain">
      <div className="hidden sm:hidden md:hidden lg:block min-w-[40%] text-white flex items-center justify-center h-100 lg:h-full w-full lg:w-[40%]">
        <img src={frame} alt="Background" className="w-full h-full" />
      </div>
      <div className="flex-1 flex flex-col p-10 xl:p-24 FormMain">
        <div className="ml-10 TextLogin">
          <h2 className="text-black text-[28px] font-semibold font-['DM Sans'] Get_Started-Text">
            Get Started Now
          </h2>
          <p className="text-black text-base font-medium font-['DM Sans'] Credential-Text">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="flex-1 w-full flex items-center justify-center mt-20 md:mt-[180px] FormWrapperLogin">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleLogin(values);
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className="w-full " style={{ maxWidth: "600px" }}>
                <div className="mb-5">
                  <Input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-1 "
                  />
                </div>
                <div className="mb-2">
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={values.password}
                    onChange={(e) => setFieldValue("password", e.target.value)}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
                <div className="flex justify-end items-center text-sm text-[#6750a4]">
                  <Link to="#">Forgot Password?</Link>
                </div>
                <div className="mt-7">
                  <Button width="100%" type="submit">
                    Login
                  </Button>
                </div>
                <div className="flex justify-end items-center gap-10 mt-3 font-medium text-sm Support_text ">
                  <Link to="/signup" className="text-black font-medium">
                    Don’t have an account?
                  </Link>
                  <Link to="#" className="text-[#6750a4]">
                    Contact Support
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
