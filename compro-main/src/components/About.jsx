import AboutItem from "./AboutItem";
import worldmap from "../assets/worldmap.png";
import aboutprofile from "../assets/aboutprofile.jpg";

function About({ page }) {
  return (
    <>
      <div className="flex flex-col mx-36 pt-8">
        {page === "home" && (
          <h2 className="text-6xl my-6 ml-16 font-semibold text-[#304816]">
            About Us
          </h2>
        )}

        <div className="flex gap-5 mx-16 justify-between">
          <AboutItem
            year={"35"}
            content={"Years in P&L and Business Management"}
          ></AboutItem>
          <AboutItem
            year={"31"}
            content={"Years in Legal and Government"}
          ></AboutItem>
          <AboutItem
            year={"30"}
            content={"Years in Market Entry and RTM Strategies"}
          ></AboutItem>
          <AboutItem
            year={"25"}
            content={"Years in Regulatory and Government Affairs"}
          ></AboutItem>
          <AboutItem
            year={"17"}
            content={"Years in Supply Chain, IT and Operations"}
          ></AboutItem>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 mx-16">
        <img src={worldmap} alt="worldmap" className="w-[75%] h-auto" />
        <p className="mt-8 text-[#164822] font-semibold text-3xl px-64 text-center">
          With decades of experience spanning Southeast Asia, the Indian
          Subcontinent, the Middle East, Europe, and Africa, our partners bring
          a unique blend of global expertise and local insights. We deliver
          tailored, actionable strategies to ensure your business is equipped to
          navigate every challenge and seize every opportunity.
        </p>
        {page === "home" && (
          <img src={aboutprofile} alt="aboutprofile" className="mt-16" />
        )}
      </div>
    </>
  );
}

export default About;
