import { ModeToggle } from "../components/mode-toggle";
import { Login } from "../auth/login";
import { SignUp } from "@/auth/signup";

const Header = () => {
  return (
    <div className="flex justify-between items-center align-middle p-4 px-6">
      <img src="../icon-96.png" />
      <div className="flex justify-center gap-4">
        <span className="flex justify-center items-center gap-2">
          <SignUp />
          <Login />
        </span>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
