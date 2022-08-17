import { useEffect } from "react";
import { supabase } from "../utils/supabase";
import { useUser } from "../context/user";

const Login = () => {
  const { login } = useUser();
  useEffect(() => login, []);

  return <button>Login</button>;
};

export default Login;
