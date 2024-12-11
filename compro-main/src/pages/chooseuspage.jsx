import Header from "../components/Header";
import bg4 from "../assets/bg4.png";
import About from "../components/About";
import Footer from "../components/Footer";
import { useEffect } from "react";

const WhyChooseUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative pb-6">
        <div></div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
          }}
        >
          <Header page={"chooseus"} />
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
        <About page={"chooseus"}></About>
      </div>
      <Footer></Footer>
    </>
  );
};

export default WhyChooseUsPage;
