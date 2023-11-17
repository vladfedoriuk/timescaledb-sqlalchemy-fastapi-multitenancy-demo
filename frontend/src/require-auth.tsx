import { useLocation, useNavigate } from "react-router-dom";
import { useCurrentUser } from "./firebase-lib/hooks";
import { useEffect } from "react";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { currentUser } = useCurrentUser();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) {
      navigate("/login", {
        replace: true,
        state: { from: location.pathname },
      });
    }
  }, [currentUser, navigate, location]);

  return children;
}

export default RequireAuth;
