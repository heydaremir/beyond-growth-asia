import { Link } from "react-router-dom";

function LearnMore({ content, img, position, bg }) {
  return (
    <>
      {position === "left" ? (
        <div
          className="flex text-white py-10 justify-evenly px-16 gap-8"
          style={{ backgroundImage: `url('${bg}')` }}
        >
          <img src={img} alt="LearnMore" className="rounded-3xl" />
          <div className="bg-opacity-custom rounded-3xl py-20 px-8 flex flex-col justify-between">
            <p className="text-5xl">{content}</p>
            <Link to={"/whatwedo"}>
              <p className="text-3xl bg-[#546e39] py-2 px-6 w-max rounded-2xl hover:bg-[#405b30] transition-all">Click Here to Learn More</p>
            </Link>
          </div>
        </div>
      ) : position === "right" ? (
        <div
          className="flex flex-row-reverse text-white py-10 justify-evenly px-16 gap-8"
          style={{ backgroundImage: `url('${bg}')` }}
        >
          <img src={img} alt="LearnMore" className="rounded-3xl" />
          <div className="bg-opacity-custom rounded-3xl py-20 px-8 flex flex-col justify-between">
            <p className="text-5xl">{content}</p>
            <Link to={"opportunity"}>
              <p className="text-3xl bg-[#546e39] py-2 px-6 w-max rounded-2xl hover:bg-[#405b30] transition-all">Click Here to Learn More</p>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default LearnMore;
