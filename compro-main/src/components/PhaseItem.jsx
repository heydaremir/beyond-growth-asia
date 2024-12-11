const PhaseItem = ({ title, content1, content2, img, color, textcolor }) => {
  return (
    <>
      <div className="flex justify-end items-scretch gap-10 my-16 mx-16">
        <div
          className="rounded-3xl shadow-lg px-8 py-6 w-2/3 flex flex-col justify-center"
          style={{ backgroundColor: color, opacity: 0.8 }}
        >
          <h2
            className="text-4xl font-semibold mb-8"
            style={{ color: textcolor }}
          >
            {title}
          </h2>
          <p className="text-3xl mb-4 font-light" style={{ color: textcolor }}>
            {content1}
          </p>
          <p className="text-3xl font-light" style={{ color: textcolor }}>
            {content2}
          </p>
        </div>

        <div className="relative w-max">
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(34, 139, 34, 0.4), rgba(34, 139, 34, 0))",
            }}
          ></div>

          <img
            src={img}
            alt={title}
            className="relative rounded-3xl shadow-md z-0"
          />
        </div>
      </div>
    </>
  );
};

export default PhaseItem;
