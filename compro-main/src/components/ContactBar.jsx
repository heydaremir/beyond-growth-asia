import { Link } from "react-router-dom";

function ContactBar() {
  return (
    <>
      <Link to={"/contact"}>
        <button className="z-5 px-10 py-1 rounded-lg bg-[#304816] hover:bg-[#506A48] text-white border-2 border-[#123112] hover:border-[#506A48] focus:outline-none transition duration-300">
          Contact Us
        </button>
      </Link>
    </>
  );
}

export default ContactBar;
