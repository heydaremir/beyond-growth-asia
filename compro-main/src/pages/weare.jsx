import bg9 from "../assets/bg9.png";
import Header from "../components/Header";
import Main from "../components/Main";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import bg4 from "../assets/bg4.png";
import About from "../components/About";
import Partner from "../components/Partner";
import { useEffect } from "react";

const WeArePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="relative pb-6"
        style={{
          backgroundImage: `url('${bg9}')`,
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
            backgroundColor: "rgba(48, 72, 22, 0.6)",
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
          <Header page={"weare"} />
          <Main
            title={
              "About Us: Your Trusted Partner for Market Entry Success in Indonesia"
            }
            content={
              "For businesses seeking to establish a strong foothold in Indonesia, navigating the complexities of market entry requires more than just ambition—it demands expertise, insight, and a comprehensive understanding of the local landscape. At our company, we specialize in helping organizations unlock Indonesia’s potential through a seamless, strategic approach that addresses every stage of the journey: feasibility, strategy, and execution."
            }
            page={"weare"}
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
        <About page={"weare"}></About>
        <Partner></Partner>
      </div>
      <ContactSection
        content={
          "With a cumulative 135+ years of expertise across industries like Cosmetics, Pharmaceuticals, FMCG, Supply Chain, IT, Textiles and Nutrition, our team offers unparalleled insights and practical solutions to help your business succeed in Indonesia and beyond. We bring together global expertise and local insights, ensuring you’re equipped to navigate challenges and seize opportunities in dynamic markets."
        }
        page={"weare"}
      ></ContactSection>
      <Footer></Footer>
    </>
  );
};

export default WeArePage;
