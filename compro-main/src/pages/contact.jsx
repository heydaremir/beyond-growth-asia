import Footer from "../components/Footer";
import Header from "../components/Header";
import bg10 from "../assets/bg10.png";
import ContactContent from "../components/ContactContent";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="relative pb-6"
        style={{
          backgroundImage: `url('${bg10}')`,
          backgroundSize: "cover",
        }}
      >
        <div></div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
          }}
        >
          <Header page={"contact"} />
        </div>
        <ContactContent></ContactContent>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ContactPage;
