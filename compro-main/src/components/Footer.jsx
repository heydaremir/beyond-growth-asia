import Logo from "./Logo";
import arrow from "../assets/arrow.png";

function Footer() {
  return (
    <>
      <div
        className="text-white py-12 px-12"
        style={{ backgroundColor: `#304816` }}
      >
        <div className="flex justify-around">
          <div>
            <div className="flex">
              <Logo></Logo>
              <p className="ml-6 w-32">
                Helping build Businesses Brands Capabilities{" "}
              </p>
            </div>
            <p className="mt-2 font-bold">BEYONDGROWTH.ASIA</p>
          </div>

          <div>
            <ul className="flex flex-col gap-4 text-right">
              <li>
                <p>Subscribe to our newsletter</p>
              </li>
              <li className="flex justify-end gap-2">
                <input
                  type="text"
                  placeholder="Email adress"
                  className="p-2 border border-gray-300 rounded w-[300px]"
                />
                <button
                  type="submit"
                  className="rounded-full border-2 p-2"
                  style={{ backgroundColor: "#D7ECD0" }}
                >
                  <img src={arrow} alt="arrowsubmit" className="w-6 h-6" />
                </button>
              </li>
              <li>
                <p>Contact Us</p>
              </li>
              <li>
                <p>Privacy policy</p>
              </li>
              <li>
                <p>Terms of use</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-10"/>
        <p className="mt-12 text-center">Copyright Beyond Growth.Asia</p>
      </div>
    </>
  );
}

export default Footer;
