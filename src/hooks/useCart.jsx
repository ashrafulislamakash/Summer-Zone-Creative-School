import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const {
   
    refetch,
    data: cart = [],
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://summerzone-server.vercel.app/carts?email=${user.email}`
      );
      return res.json();
    },
  });

  return [refetch, cart];
};

export default useCart;
