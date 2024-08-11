import { Link } from "react-router-dom";
import UserLoginForm from "./UserLoginForm";

const Login = () => {
  return (
    <>
      <div className="h-screen grid content-center">
        <h1 className="text-3xl font-semibold text-center mb-2">
          Welcome Back!
        </h1>
        <p className="text-center mb-6 text-slate-400 font-semibold">
          Enter your username and password to login
        </p>
        <UserLoginForm />
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="inline text-center underline underline-offset-2"
          >
            Register here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
