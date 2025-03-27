import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { AppDispatch } from "../store";
import { login } from "../store/authSlice";

const schema = z.object({
  email: z.string().email({ message: "正しいメールアドレスを入れてください" }),
  password: z.string().min(4, { message: "4文字以上で入力してください" }),
});

type FormData = z.infer<typeof schema>;

const LoginFrom = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("ログイン成功", data);

    dispatch(login());
  };

  return (
    <>
          <form onSubmit={handleSubmit(onSubmit)}>
              
              
      </form>
    </>
  );
};

export default LoginFrom;
