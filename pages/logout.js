import { useEffect } from "react";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";

const LogOut = () => {
  const router = useRouter();
  useEffect(() => {
    (async function () {
      await supabase.auth.signOut();
      router.push("/");
    })();
  }, [router]);
  return <button>LogOut</button>;
};

export default LogOut;