const PricingCard = ({ name, price, description, features, accent }) => (
  <div
    className={`rounded-2xl p-6 shadow-card transition hover:-translate-y-1 ${
      accent ? "bg-mint-500/10 border border-mint-500/30" : "glass-panel"
    }`}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      {accent ? (
        <span className="rounded-full bg-mint-500/20 px-3 py-1 text-xs font-semibold text-mint-400">
          Más elegido
        </span>
      ) : null}
    </div>
    <p className="mt-3 text-3xl font-semibold text-white">{price}</p>
    <p className="mt-2 text-sm text-slate-300">{description}</p>
    <ul className="mt-6 space-y-3 text-sm text-slate-200">
      {features.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-mint-400" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <button className="button-secondary mt-6 w-full" aria-label={`Elegir plan ${name}`}>
      Agendar demo
    </button>
  </div>
);

export default PricingCard;

