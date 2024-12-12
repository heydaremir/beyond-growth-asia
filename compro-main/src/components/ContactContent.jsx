import React, { useState } from "react";

const ContactContent = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  // Fungsi untuk menghandle perubahan input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk menghandle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Kirim data form ke backend
      });

      // Cek jika response berhasil
      if (response.ok) {
        alert("Email sent successfully!");
        // Reset form setelah submit
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <div className="flex flex-col justify-start ml-20 mt-24 mr-[800px] mb-20">
      <h1 className="text-6xl font-semibold text-[#164822]">Contact Us</h1>
      <p className="text-3xl mt-8 font-semilight text-[#164822]">
        Thank you for your interest in Beyond Growth Asia. Please fill out
        this form to ask a question or report a technical problem. We will
        reach out back to you by email.
      </p>
      <form onSubmit={handleSubmit} className="mt-10">
        <ul>
          <li className="flex justify-start mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-2xl w-[620px] text-2xl placeholder:text-[#55772F]"
            />
          </li>
          <li className="flex justify-start mb-6">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-2xl w-[620px] text-2xl placeholder:text-[#55772F]"
            />
          </li>
          <li className="flex justify-start mb-6">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-2xl w-[620px] text-2xl placeholder:text-[#55772F]"
            />
          </li>
          <li className="flex justify-start mb-6">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-2xl w-[620px] text-2xl placeholder:text-[#55772F]"
            />
          </li>
          <li className="flex justify-start mb-6">
            <textarea
              rows={5}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-2xl w-[620px] text-2xl placeholder:text-[#55772F]"
            />
          </li>
          <button
            type="submit"
            className="bg-lime-600 text-white px-6 py-3 rounded-2xl text-2xl hover:bg-lime-700 transition duration-300"
          >
            Submit
          </button>
        </ul>
      </form>
    </div>
  );
};

export default ContactContent;