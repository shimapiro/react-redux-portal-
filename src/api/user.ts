import axios from "axios";

export const getUser = () => {
  const token = localStorage.getItem("token");

  return axios.get("https://reqres.in/api/users/2", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};



// email: "eve.holt@reqres.in"
// password: "cityslicka"
