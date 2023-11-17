import { Title, Text } from "@tremor/react";
import { useCurrentUser } from "./firebase-lib/hooks";
import { Button } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import { Divider } from "@tremor/react";

export const Header = () => {
  const { currentUser, signOutCurrentUser } = useCurrentUser();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOutCurrentUser();
      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header>
      <nav className="flex items-center justify-between mt-4 mb-4 px-4">
        <Title>Demo UI</Title>
        {currentUser ? (
          <div className="flex items-center space-x-2">
            <Text>{currentUser.displayName! || currentUser.email}</Text>
            <Button size="xs" onClick={logout} variant="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button size="sm" onClick={logout}>
            Login
          </Button>
        )}
      </nav>
      <Divider />
    </header>
  );
};
