function ContentMain({ title, content, page }) {
  return (
    <>
      <div
        className={`flex flex-col text-white ${
          page === "wedo"
            ? "justify-center items-center text-center px-12 lg:px-60"
            : "pl-5 pr-10 lg:pl-20 lg:pr-[800px]"
        } ${page === "weare" ? "relative mb-[452px]" : ""}`}
      >
        <h1
          className="text-6xl font-bold leading-tight mb-4"
          style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)" }}
        >
          {title}
        </h1>
        <div
          className={`${
            page === "weare"
              ? "bg-[#506A48] p-2 rounded-2xl mt-4 opacity-80"
              : ""
          } mb-40`}
        >
          <p
            className={`${
              page === "home"
                ? "text-3xl"
                : page === "opportunity"
                ? "text-4xl"
                : "text-3xl"
            }`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default ContentMain;
