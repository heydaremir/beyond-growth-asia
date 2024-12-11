import indonesiamap from "../assets/indonesiamap.png";

function SubContentOpportunity() {
  return (
    <>
      <div className="flex flex-row-reverse">
        <img src={indonesiamap} alt="indonesiamap" />
      </div>
      <div className="flex text-white py-10 justify-evenly px-16 gap-8 mr-96">
        <div
          className="rounded-3xl py-20 px-8 flex flex-col justify-between"
          style={{ backgroundColor: "rgba(48, 72, 22, 0.6)" }}
        >
          <p className="text-5xl font-light">
            With a population of 283,487,931 (2024) and a rapidly growing middle
            class, Indonesia stands out as a prime destination for investment in
            various industry.
          </p>
        </div>
      </div>
    </>
  );
}

export default SubContentOpportunity;
