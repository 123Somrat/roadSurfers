import brandLogo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <Link to={"/"} data-testid="nav-link">
        <img src={brandLogo} alt="brandLogo" className="w-[106px]  h-[40px]" />
      </Link>
    </>
  );
}
