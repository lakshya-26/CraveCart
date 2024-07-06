import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          className="text-3xl font-bold tracking-tight text-orange-500"
          to="/"
        >
          CraveCart
        </Link>
      </div>
    </div>
  );
};

export default Header;
