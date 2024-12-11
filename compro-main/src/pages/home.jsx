import Header from "../components/Header";
import Main from "../components/Main";
import bg1 from "../assets/bg1.png";
import LearnMore from "../components/LearnMore";
import learnmore1 from "../assets/learnmore1.png";
import learnmore2 from "../assets/learnmore2.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import About from "../components/About";
import bg4 from "../assets/bg4.png";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <div
        className="relative pb-6"
        style={{
          backgroundImage: `url('${bg1}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header page={"home"}></Header>
        <Main
          title={
            "Unlock Your Business Potential in SEA with Proven Expertise Of Industry Leaders"
          }
          content={
            "With over two decades of experience in the fast-moving consumer goods (FMCG) and health care industry. Our partners bring unmatched expertise and insights of Indonesia and other South-East Asian markets. We understand the complexities of expanding into new markets, and we’re here to guide your business every step of the way."
          }
          page={"home"}
        ></Main>
      </div>
      <LearnMore
        content={
          "Our tailored 3-Step Market Entry Framework is designed to streamline your expansion, minimize risks, and maximize growth potential:"
        }
        img={learnmore1}
        position={"left"}
        bg={bg2}
      ></LearnMore>
      <LearnMore
        content={"Investing in Indonesia: Unlocking Asia’s Economic Powerhouse"}
        img={learnmore2}
        position={"right"}
        bg={bg3}
      ></LearnMore>
      <div
        className="relative pb-12"
        style={{
          backgroundImage: `url('${bg4}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <About page={"home"}></About>
      </div>
      <ContactSection
        content={
          "Whether you’re evaluating opportunities, crafting a market entry strategy, or executing your plan, we are here to help you every step of the way. Our proven track record, industry expertise, and local insights make us the ideal partner for businesses looking to expand into Indonesia."
        }
      ></ContactSection>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
