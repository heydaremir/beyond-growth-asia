import bg5 from "../assets/bg5.png";
import { Link } from "react-router-dom";

function ContactSection({ content, page }) {
  return (
    <>
      <div
        className="text-white py-24 px-64 text-center"
        style={{ backgroundImage: `url('${bg5}')` }}
      >
        <p className={`text-4xl ${page === "weare" ? "mx-12" : "mx-40"}`}>
          {content}
        </p>
        <Link to={"/contact"}>
          <button className="text-4xl bg-opacity-custom px-12 py-1 rounded-full focus:outline-none mt-12">
            Contact Us
          </button>
        </Link>
      </div>
    </>
  );
}

export default ContactSection;
