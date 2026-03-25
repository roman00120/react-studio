const TestimonialCard = ({ quote, name, role, company }) => (
  <div className="glass-panel rounded-2xl p-6 shadow-card transition hover:-translate-y-1 hover:border-white/20">
    <p className="text-sm leading-relaxed text-slate-200">“{quote}”</p>
    <div className="mt-6">
      <p className="font-semibold text-white">{name}</p>
      <p className="text-xs text-slate-400">{role} · {company}</p>
    </div>
  </div>
);

export default TestimonialCard;

