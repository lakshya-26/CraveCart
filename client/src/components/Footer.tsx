import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="py-16">
      <h2 className="footerHeading mb-16">
        </h2>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl font-bold tracking-tight">
        <Link
          className="text-3xl font-bold tracking-tight text-orange-500"
          to="/"
        >
          <motion.img
            src={logo}
            alt="logo"
            className="h-[55px] w-[120px] md:mb-0 mb-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 1000, damping: 200 }}
          />
        </Link>
        </span>
        <span className="font-bold tracking-tight flex gap-4 md:pt-5">
          <span>Privacy Policy</span>
          <span>Terms of service</span>
        </span>
        <span className="font-bold tracking-tight md:pt-5">
          &copy;copyright-2024
        </span>
      </div>
    </div>
  );
};

export default Footer;
