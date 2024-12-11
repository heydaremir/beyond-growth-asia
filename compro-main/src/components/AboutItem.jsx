function AboutItem({ year, content }) {
  return (
    <>
      <div className="text-center text-[#304816] mt-6 border-2 border-[#7e8677] rounded-full p-8">
        <p className="text-6xl">{year}+</p>
        <p className="text-lg max-w-[160px]">{content}</p>
      </div>
    </>
  );
}

export default AboutItem;
