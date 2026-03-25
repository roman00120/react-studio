const SectionHeading = ({ badge, title, subtitle, align = "left" }) => {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {badge ? <span className="badge">{badge}</span> : null}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        {subtitle ? (
          <p className="text-base text-slate-300 md:text-lg text-balance">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
};

export default SectionHeading;

