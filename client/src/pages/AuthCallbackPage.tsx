import { useCreateMyUser } from "@/api/MyUserApi";
import Spinner from "@/components/Spinner";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreateduser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreateduser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreateduser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);
  return <Spinner />;
};

export default AuthCallbackPage;
