import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="border-b shadow-xl border-b-orange-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          className="text-3xl font-bold tracking-tight text-orange-500"
          to="/"
        >
          <motion.img
            src={logo}
            alt="logo"
            className="h-[55px] w-[120px]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 1000, damping: 200 }}
          />
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
