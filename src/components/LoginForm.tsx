import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { loginApi } from "../api/auth";
import { AppDispatch } from "../store";
import { login } from "../store/authSlice";

const schema = z.object({
  email: z
    .string()
    .email({ message: "正しいメールアドレスを入力してください" }),
  password: z.string().min(4, { message: "4文字以上で入力してください" }),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [erroMsg, setErroMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onsubmit = async (data: FormData) => {
    setErroMsg("");

    try {
      const res = await loginApi(data);

      localStorage.setItem("token", res.token);
      dispatch(login());
      navigate("/dashboard");
    } catch (err) {
      console.error("API失敗", err);
      setErroMsg(
        "ログインに失敗しました。メールとパスワードを確認してください"
      );
    }
  };

  return (
    <form
      className="max-w-sm mx-auto mt-10 p-6 shadow rounded"
      onSubmit={handleSubmit(onsubmit)}
    >
      <h2 className="text-xl mb-4 font-bold text-center">LoginFrom</h2>
      <div className="mb-4">
        <label className="block mb-1">メールアドレス</label>
        <input
          {...register("email")}
          className="w-full border px-2 py-1 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1">パスワード</label>
        <input
          {...register("password")}
          className="w-full border px-2 py-1 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          ログイン
        </button>
        {erroMsg && (
          <p className="text-red-500 text-sm mt-2 text-center">{erroMsg}</p>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
