import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Button asChild>
      <Link to={"/login"}>Login</Link>
    </Button>
  );
}
