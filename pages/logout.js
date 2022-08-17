import { useEffect } from "react";
import { supabase } from "../utils/supabase";
import { useUser } from "../context/user";

const LogOut = () => {
  const { logout } = useUser();
  useEffect(() => logout, []);
  return <button>LogOut</button>;
};

export default LogOut;
