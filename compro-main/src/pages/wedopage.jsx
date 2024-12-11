import bg7 from "../assets/bg7.png";
import Header from "../components/Header";
import Main from "../components/Main";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Phase from "../components/Phase";
import bg8 from "../assets/bg8.png";
import { useEffect } from "react";

const WeDoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  return (
    <>
      <div
        className="relative pb-6"
        style={{
          backgroundImage: `url('${bg7}')`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(48, 72, 22, 0.4)",
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
          }}
        >
          <Header page={"wedo"} />
          <Main
            title={
              "Our tailored 3 Phase Market Entry Framework is designed to streamline your expansion, minimize risks, and maximize growth potential"
            }
            page={"wedo"}
          />
        </div>
      </div>
      <div
        className="relative pb-12"
        style={{
          backgroundImage: `url('${bg8}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Phase></Phase>
      </div>
      <ContactSection
        content={
          "Our consultancy focuses on recommending the best strategies tailored to your specific needs, equipping you with the insights to make informed decisions. Let us partner with you to craft a strategy that serves as the foundation for a successful market entry."
        }
      ></ContactSection>
      <Footer></Footer>
    </>
  );
};

export default WeDoPage;
