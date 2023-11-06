import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import frame from "../../assets/images/frame.svg";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const validationSchemaSignup = Yup.object({
  name: Yup.string()
    .required("Full name is required")
    .min(3, "Full name length is greter then 3 character"),
  organization: Yup.string()
    .required("Organization name is required")
    .min(3, "Organization name length is greter then 3 character"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Signup: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="text-white flex items-center justify-center h-72 lg:h-full w-full lg:w-2/4 ">
        <img
          src={frame}
          alt="Background"
          className="w-full w- h-full object-left-top object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col p-10 xl:px-24">
        <div>
          <h2 className="text-3xl font-medium">Get Register Now</h2>
          <p className="text-lg	 font-normal">
            Enter your details to create your account
          </p>
        </div>
        <div className="flex-1 w-full flex items-center justify-center mt-20 md:mt-0">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchemaSignup}
            onSubmit={(values) => {
              // Handle form submission here
              console.log(values);
            }}
          >
            <Form className="w-full mt-5" style={{ maxWidth: "600px" }}>
              <div className="mb-5">
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-5">
                <Input
                  type="text"
                  placeholder="Enter your email Address"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-5">
                <Input
                  type="text"
                  placeholder="Enter your organization nname"
                  name="organization"
                />
                <ErrorMessage
                  name="organization"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-5">
                <Input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>{" "}
              <div className="mb-5">
                <Input
                  type="password"
                  placeholder="Enter your confirm password"
                  name="confirmPassword"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mt-7">
                <Button onClick={() => navigate("/otp")} width="100%">
                  Register
                </Button>
              </div>
              <div className="flex justify-end items-center gap-10 mt-3 font-medium text-sm	">
                <Link to="/" className="text-black font-medium">
                  Do you have an account?
                </Link>
                <Link to="#">Contact Support</Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
