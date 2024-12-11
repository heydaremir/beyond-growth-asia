import Header from "../components/Header";
import Main from "../components/Main";
import bg6 from "../assets/bg6.png";
import bg4 from "../assets/bg4.png";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import OpportunityContent from "../components/OpportunityContent";
import { useEffect } from "react";

const OpportunityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <div
        className="relative pb-6"
        style={{
          backgroundImage: `url('${bg6}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          <Header page={"opportunity"} />
          <Main
            title={
              "Investing in Indonesia: Unlocking Asia's Economic Powerhouse"
            }
            content={
              "Explore the Benefits of Investing in One of Asia’s Fastest-Growing Economies"
            }
            page={"opportunity"}
          />
        </div>
      </div>
      <div
        className="relative pb-12"
        style={{
          backgroundImage: `url('${bg4}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <OpportunityContent></OpportunityContent>
      </div>
      <ContactSection
        content={
          "Ready to explore investment opportunities? Contact Us for more information on how to get started in Indonesia's thriving market."
        }
      ></ContactSection>
      <Footer></Footer>
    </>
  );
};

export default OpportunityPage;
