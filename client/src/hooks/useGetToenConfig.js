import { useContext, useMemo } from "react";
import { AuthContext } from "../context/AuthContext";

export const useGetTokenConfig = () => {
  const { user } = useContext(AuthContext);
  const token = user?.access_token;

  return useMemo(
    () => ({
      headers: {
        authorization: token,
      },
    }),
    []
  );
};
