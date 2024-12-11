import PhaseMain from "./PhaseMain";
import phase1 from "../assets/phase1.png";
import phase2 from "../assets/phase2.png";
import phase3 from "../assets/phase3.png";
import PhaseItem from "./PhaseItem";
import phase1sub1 from "../assets/phase1sub1.png";
import phase1sub2 from "../assets/phase1sub2.png";
import phase2sub1 from "../assets/phase2sub1.png";
import phase2sub2 from "../assets/phase2sub2.png";
import phase2sub3 from "../assets/phase2sub3.png";
import phase2sub4 from "../assets/phase2sub4.png";
import phase2sub5 from "../assets/phase2sub5.png";
import phase2sub6 from "../assets/phase2sub6.png";
import phase2sub7 from "../assets/phase2sub7.png";

const Phase = () => {
  return (
    <>
      <PhaseMain
        title={"Phase 1:"}
        subtitle={"Feasibility Study"}
        content1={
          "Entering a new market requires careful planning. A Feasibility Study is the crucial first step, helping to assess risks, challenges, and opportunities to determine if a project is viable and sustainable in the target market."
        }
        content2={
          "At our company, we specialize in comprehensive Feasibility Studies that deliver tailored insights to inform your market entry. Our approach includes:"
        }
        img={phase1}
        color={"#D7ECD0"}
        textcolor={"#164822"}
      ></PhaseMain>
      <PhaseItem
        title={"Opportunity Sizing Based on Product Category"}
        content1={
          "We analyze the market size and potential based on specific product categories, helping you understand where the biggest opportunities lie"
        }
        img={phase1sub1}
        color={"#D7ECD0"}
        textcolor={"#164822"}
      ></PhaseItem>
      <PhaseItem
        title={"In Depth Market Research"}
        content1={
          "We conduct thorough research to give you a complete market landscape. This can include:"
        }
        content2={
          "Consumer Insights, Channel Analysis, Product Assessment, Competitive Landscape, Regulatory and Legal Environment"
        }
        img={phase1sub2}
        color={"#D7ECD0"}
        textcolor={"#164822"}
      ></PhaseItem>
      <PhaseMain
        title={"Phase 2:"}
        subtitle={"Entry Market Strategy"}
        content1={
          "A Route to Market (RTM) Strategy is a comprehensive plan that outlines how a product or service will be delivered to its target customers."
        }
        content2={
          "At our company, we offer tailored consultancy services to help you navigate the complexities of entering a new market. Our process includes recommending the best strategies across key aspects of market entry:"
        }
        img={phase2}
        color={"#AABB77"}
        textcolor={"#164822"}
      ></PhaseMain>
      <PhaseItem
        title={"Brand, Licensing, and Market Authorization"}
        content1={
          " We provide guidance on how to position your brand effectively, navigate licensing processes, and address market authorization requirements, ensuring your approach aligns with local expectations."
        }
        img={phase2sub1}
        color={"#AABB77"}
        textcolor={"#164822"}
      ></PhaseItem>
      <PhaseItem
        title={"Direct-to-Consumer (D2C) Approach"}
        content1={
          " We recommend strategies to connect directly with consumers, fostering brand loyalty and gathering valuable insights through targeted online and offline engagement channels."
        }
        img={phase2sub2}
        color={"#AABB77"}
        textcolor={"#164822"}
      ></PhaseItem>
      <PhaseItem
        title={"Partnering with Distributors"}
        content1={
          "Our team identifies potential distributor options and provides insights into selecting partners that align with your business goals and market needs."
        }
        img={phase2sub3}
        color={"#AABB77"}
        textcolor={"#164822"}
      ></PhaseItem>
      <PhaseItem
        title={"Legal Entity Establishment"}
        content1={
          "We guide you on the steps involved in establishing a legal entity, providing recommendations for structuring and registering your business in compliance with local laws."
        }
        img={phase2sub4}
        color={"#AABB77"}
        textcolor={"#164822"}
      ></PhaseItem>
      <PhaseItem
        title={"Channel Listing"}
        content1={
          "We advise on the most effective channels for listing your products, whether through major retail chains or niche outlets, to maximize visibility and reach."
        }
        img={phase2sub5}
        color={"#AABB77"}
        textcolor={"#164822"}
      ></PhaseItem>
      <PhaseItem
        title={"Supply Chain Optimization"}
        content1={
          "We help design an efficient supply chain strategy, ensuring reliable product availability, cost-effectiveness, and smooth logistics operations."
        }
        img={phase2sub6}
        color={"#AABB77"}
        textcolor={"#164822"}
      ></PhaseItem>
      <PhaseItem
        title={"Regulatory and Government Affairs"}
        content1={
          "We navigate the complexities of local regulations and government requirements, ensuring full compliance and building strong relationships with regulatory bodies."
        }
        img={phase2sub7}
        color={"#AABB77"}
        textcolor={"#164822"}
      ></PhaseItem>
      <PhaseMain
        title={"Phase 3:"}
        subtitle={"Execution"}
        content1={
          "We understand that planning is only part of the equation. Execution is where strategies come to life. For clients without local resources, we will support you in executing and implementing the entry strategy effectively, leveraging our extensive local networks and operational expertise."
        }
        img={phase3}
        color={"#164822"}
        textcolor={"#FFFEF2"}
      ></PhaseMain>
    </>
  );
};

export default Phase;
