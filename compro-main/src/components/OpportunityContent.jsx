import tangan from "../assets/tangan.png";

function OpportunityContent() {
  return (
    <>
      <div className="flex flex-wrap gap-4 m-8 text-right justify-evenly">
        <div
          className="p-6 shadow-lg max-w-[412px] rounded-bl-3xl rounded-tr-3xl"
          style={{ backgroundColor: "rgba(48, 72, 22, 0.7)" }}
        >
          <h3 className="text-white text-4xl font-semibold mb-2">
            Strategic Location
          </h3>
          <p className="text-white text-2xl font-light mt-6">
            Located along the Malacca and Singapore Straits, one of the world’s
            primary trade routes
          </p>
        </div>
        <div
          className="p-6 shadow-lg max-w-[412px] rounded-bl-3xl rounded-tr-3xl"
          style={{ backgroundColor: "rgba(48, 72, 22, 0.7)" }}
        >
          <h3 className="text-white text-4xl font-semibold mb-2">
            Cultural & Market
          </h3>
          <p className="text-white text-2xl font-light mt-6">
            In 2024, Indonesia's GDP is projected to reach approximately USD
            1.39 trillion, continuing to position the country as one of the
            largest economies in Asia
          </p>
        </div>
        <div
          className="p-6 shadow-lg max-w-[412px] rounded-bl-3xl rounded-tr-3xl"
          style={{ backgroundColor: "rgba(48, 72, 22, 0.7)" }}
        >
          <h3 className="text-white text-4xl font-semibold mb-2">
            Consumer Market
          </h3>
          <p className="text-white text-2xl font-light mt-6">
            Indonesia's 2024 consumer market has over 273 million people, with
            67% in the middle class. Consumer spending reached USD 109.87
            billion
          </p>
        </div>
        <div
          className="p-6 shadow-lg max-w-[412px] rounded-bl-3xl rounded-tr-3xl"
          style={{ backgroundColor: "rgba(48, 72, 22, 0.7)" }}
        >
          <h3 className="text-white text-4xl font-semibold mb-2">
            Government Initiatives
          </h3>
          <p className="text-white text-2xl font-light mt-6">
            Indonesian government has taken steps to improve the ease of doing
            business with the OSS system
          </p>
        </div>
        <div
          className="p-6 shadow-lg max-w-[412px] rounded-bl-3xl rounded-tr-3xl"
          style={{ backgroundColor: "rgba(48, 72, 22, 0.7)" }}
        >
          <h3 className="text-white text-4xl font-semibold mb-2">
            Digital Economy
          </h3>
          <p className="text-white text-2xl font-light mt-6">
            The industry was valued at over $30 billion in gross market value in
            2020 and is expected to reach $83 billion in 2025
          </p>
        </div>
        <div
          className="p-6 shadow-lg max-w-[412px] rounded-bl-3xl rounded-tr-3xl"
          style={{ backgroundColor: "rgba(48, 72, 22, 0.7)" }}
        >
          <h3 className="text-white text-4xl font-semibold mb-2">
            Investment & Legal
          </h3>
          <p className="text-white text-2xl font-light mt-6">
            Indonesia's natural resources and strong legal framework offer
            lucrative and compliant investment opportunities.
          </p>
        </div>
      </div>
      <div className="flex gap-8 m-20 items-center">
        <img src={tangan} alt="investment" />
        <div
          className="p-6 rounded-lg shadow-lg max-w-fit w-auto"
          style={{ backgroundColor: "rgba(48, 72, 22, 0.5)" }}
        >
          <h3 className="text-white text-5xl font-semibold mb-2">
            Get started with your investment today!
          </h3>
          <p className="text-white text-3xl font-light mt-6">
            With a supportive government, a thriving economy, and a large
            consumer base, Indonesia presents an ideal market for investors
            seeking to establish or expand their businesses. Do not miss the
            opportunity to be part of this rapidly growing market—invest in
            Indonesia today!
          </p>
        </div>
      </div>
    </>
  );
}

export default OpportunityContent;
