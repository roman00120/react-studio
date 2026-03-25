const InfoCard = ({ icon, title, description, highlight }) => (
  <div className="glass-panel rounded-2xl p-6 shadow-card transition hover:-translate-y-1 hover:border-white/20">
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl">
        {icon}
      </span>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {highlight ? <p className="text-xs text-mint-400 uppercase tracking-[0.2em]">{highlight}</p> : null}
      </div>
    </div>
    <p className="mt-4 text-sm text-slate-300 leading-relaxed">{description}</p>
  </div>
);

export default InfoCard;

