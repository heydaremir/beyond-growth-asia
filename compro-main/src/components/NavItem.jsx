import { Link } from "react-router-dom";

function NavItem({ item, path }) {
  return (
    <>
      <Link
        to={path}
        className="hover:text-green-600 transition-colors duration-200"
      >
        {item}
      </Link>
    </>
  );
}

export default NavItem;
