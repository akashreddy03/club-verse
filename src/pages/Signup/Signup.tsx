import { Link } from "react-router-dom";
import UserSignupForm from "./UserSignupForm";

const Signup = () => {
  return (
    <>
      <div className="h-screen grid place-content-center">
        <h1 className="text-3xl font-semibold text-center mb-2">
          Create an account
        </h1>
        <p className="text-center mb-6 text-slate-400 font-semibold">
          Enter your email below to create your account
        </p>
        <UserSignupForm />
        <p className="text-center mt-4">
          Have an account?{" "}
          <Link
            to="/login"
            className="inline text-center underline underline-offset-2"
          >
            Login here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
