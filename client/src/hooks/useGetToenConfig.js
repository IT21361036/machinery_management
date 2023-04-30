import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useGetTokenConfig = () => {
  const { user } = useContext(AuthContext);
  const token = user?.access_token;

  const config = {
    headers: {
      authorization: token,
    },
  };

  return config;
};
