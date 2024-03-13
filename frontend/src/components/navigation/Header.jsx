// import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import Logo from "/public/assets/Logo.png";

const Header = () => {
  return (
    <header className="font-geotica bg-gradient-to-b from-blue-duke-blue to-green-sage w-screen h-24 text-yellow-canary-yellow">
      <div className="nav-area">
        <Link to="/" className="logo">
          <img
            src={Logo}
            alt="Frame of Light Designs logo"
            id="logo"
            className="top-6 relative"
          />
        </Link>

        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        {/* <MobileNav /> */}
      </div>
    </header>
  );
};

export default Header;
