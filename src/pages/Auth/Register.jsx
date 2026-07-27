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
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const showPass = useSelector((state) => state.Auth.showPass);
  const users = useSelector((state) => state.Auth.users);

  const onSubmit = (data) => {
    let userExist = users.find(
      (u) => u.email.toLowerCase() === data.email.toLowerCase(),
    );
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

  const inputStyle =
    "w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100"
      >
        <div>
          <label className={labelStyle} htmlFor="username">
            name
          </label>
          <input
            className={inputStyle}
            type="text"
            id="username"
            {...register("username", { required: "this filed is required" })}
          />
          {errors.username && <Error error={errors.username.message} />}
        </div>

        <div>
          <label className={labelStyle} htmlFor="email">
            email
          </label>
          <input
            className={inputStyle}
            type="email"
            id="email"
            {...register("email", { required: "this filed is required" })}
          />
          {errors.email && <Error error={errors.email.message} />}
        </div>

        <div>
          <label className={labelStyle} htmlFor="password">
            password
          </label>
          <div className="flex">
            <input
              className={`${inputStyle} w-[70%]`}
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
        <div className="mt-5">
          <button className="w-full bg-slate-800 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-slate-900 transition-colors active:scale-[0.98]">
            create account
          </button>
        </div>
        <div className="mt-5">
          <p>
            do u have a accoutn ? <NavLink to="/auth/login" className={'underline'}>login</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
