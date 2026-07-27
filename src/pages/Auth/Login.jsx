import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, showPassword } from "../../features/AuthSlice";
import Error from "../../components/common/Error";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const showPass = useSelector((state) => state.Auth.showPass);
  const users = useSelector((state) => state.Auth.users);
  const currentUser = useSelector((state) => state.Auth.currentUser);
  console.log(currentUser);

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
    dispatch(login(existUser));
    toast.success("login successfully");
    navigate("/dashboard");
  };

  useEffect(() => {
    localStorage.setItem("user_session", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <div>
      <ToastContainer />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100"
      >
        <h2 className="text-xl font-semibold mb-6 text-gray-800">login</h2>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="enter your email"
            {...register("email", { required: "this filed is requiered" })}
          />
          {errors.email && <Error error={errors.email.message} />}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            password
          </label>
          <div className="flex ">
            <input
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
              onClick={() => dispatch(showPassword({ showPass: showPass }))}
            >
              {showPass ? <Eye /> : <EyeOff />}
            </button>
          </div>
          {errors.password && <Error error={errors.password.message} />}
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-slate-800 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-slate-900 transition-colors active:scale-[0.98]"
        >
          login
        </button>
        <p className="mt-4">
          do u want to{" "}
          <NavLink to="/auth/register" className={`underline`}>
            create account ?
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
