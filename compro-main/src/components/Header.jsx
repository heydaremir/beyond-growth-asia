import NavBar from "./Navbar";
import ContactBar from "./ContactBar";
import Logo from "./Logo";

function Header({ page }) {
  return (
    <>
      <div
        className="flex justify-between px-8 py-8 items-center text-white"
        style={{
          backgroundColor: "#304816",   
          opacity: page === "home" ? 0.7 : 0.8,
        }}
      >
        <Logo></Logo>
        <NavBar></NavBar>
        <ContactBar></ContactBar>
      </div>
    </>
  );
}

export default Header;
