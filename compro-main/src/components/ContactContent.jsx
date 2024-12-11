const ContactContent = () => {
  return (
    <>
      <div className="flex flex-col justify-start ml-20 mt-24 mr-[800px] mb-20">
        <h1 className="text-6xl font-semibold text-[#164822]">Contact Us</h1>
        <p className="text-3xl mt-8 font-semilight text-[#164822]">
          Thank you for your interest in Beyond Growth Asia. Please fill out
          this form to ask a question or report a technical problem. We will
          reach out back to you by email.
        </p>
        <div className="mt-10">
          <li className="flex justify-start mb-6">
            <input
              type="text"
              placeholder="Name"
              className="p-2 border border-gray-300 rounded-2xl w-[620px] text-2xl placeholder:text-[#55772F]"
            />
          </li>
          <li className="flex justify-start mb-6">
            <input
              type="text"
              placeholder="Email adress"
              className="p-2 border border-gray-300 rounded-2xl w-[620px] text-2xl placeholder:text-[#55772F]"
            />
          </li>
          <li className="flex justify-start mb-6">
            <input
              type="text"
              placeholder="Company"
              className="p-2 border border-gray-300 rounded-2xl w-[620px] text-2xl placeholder:text-[#55772F]"
            />
          </li>
          <li className="flex justify-start mb-6">
            <input
              type="text"
              placeholder="Subject"
              className="p-2 border border-gray-300 rounded-2xl w-[620px] text-2xl placeholder:text-[#55772F]"
            />
          </li>
          <li className="flex justify-start mb-6">
            <textarea
              rows={5}
              placeholder="Message"
              className="p-2 border border-gray-300 rounded-2xl w-[620px] text-2xl placeholder:text-[#55772F]"
            />
          </li>
          <button
            type="submit"
            className="bg-lime-600 text-white px-6 py-3 rounded-2xl text-2xl hover:bg-lime-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
