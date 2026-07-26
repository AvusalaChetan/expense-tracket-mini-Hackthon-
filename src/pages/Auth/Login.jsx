import {Eye, EyeOff} from "lucide-react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {login, showPassword} from "../../features/AuthSlice";
import Error from "../../components/common/Error";
import {ToastContainer, toast} from "react-toastify";
import {NavLink, useNavigate} from "react-router";
import { useEffect } from "react";

const Login = () => {
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const showPass = useSelector((state) => state.Auth.showPass);
  const users = useSelector((state) => state.Auth.users);
  const currentUser = useSelector((state) => state.Auth.currentUser);
console.log(currentUser)

  const onSubmit = (data) => {
    const existUser = users.find((u) => u.email === data.email);
    if (!existUser) {
      toast.error("user not exist with that email");
      return;
    }
    if (existUser.password !== data.password) {
      toast.error("username or password is worng");
      return;
    }
    dispatch(login(existUser))
    toast.success("login successfully");
    navigate("/dashboard");
  };
  
  useEffect(() => {
    localStorage.setItem("user_session", JSON.stringify(currentUser));
}, [currentUser]);

  return (
    <div>
      <ToastContainer />
      <div></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            placeholder="enter your email"
            {...register("email", {required: "this filed is requiered"})}
          />
          {errors.email && <Error error={errors.email.message} />}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            placeholder="enter your password"
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
        <button type="submit">login</button>
      </form>
      <p>
        do u want to <NavLink to="/auth/register">create account </NavLink>
      </p>
    </div>
  );
};

export default Login;
