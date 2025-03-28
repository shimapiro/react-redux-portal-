import axios from "axios";

type LoginPayload = {
  email: string;
  password: string;
};

export const loginApi = async (data: LoginPayload) => {
  const res = await axios.post("https://reqres.in/api/login", data);
  return res.data;
};
