import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/common/Error";
import { registerUser, showPassword } from "../../features/AuthSlice";
import { NavLink, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const showPass = useSelector((state) => state.Auth.showPass);
  const users = useSelector((state) => state.Auth.users);

  const onSubmit = (data) => {
    let userExist = users.find((u) => u.email.toLowerCase() === data.email.toLowerCase());
    if (userExist) {
      toast.error("A user already exists with that email.");
      return;
    }
    dispatch(registerUser(data));
    localStorage.setItem("user_session", JSON.stringify(data));
    toast.success("account is created");
    navigate("/dashboard");
  };
  
  useEffect(() => {
  localStorage.setItem("users", JSON.stringify(users));
}, [users]);

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">name</label>
          <input
            type="text"
            id="username"
            {...register("username", {required: "this filed is required"})}
          />
          {errors.username && <Error error={errors.username.message} />}
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            {...register("email", {required: "this filed is required"})}
          />
          {errors.email && <Error error={errors.email.message} />}
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input
            type={showPass ? "text" : "password"}
            {...register("password", {
              required: {
                value: true,
                message: "password is required",
              },
              minLength: {
                value: 6,
                message: "password minimum length must be 6",
              },
              maxLength: {
                value: 18,
                message: "password maximum length can be 18",
              },
            })}
          />
          <button
            type="button"
            className=""
            onClick={() => dispatch(showPassword({showPass: showPass}))}
          >
            {showPass ? <Eye /> : <EyeOff />}
          </button>
          {errors.password && <Error error={errors.password.message} />}
        </div>
        <div>
          <button>create account</button>
        </div>
      </form>
      <p>
        do u have a accoutn ? <NavLink to="/auth/login">login</NavLink>
      </p>
    </div>
  );
};

export default Register;
