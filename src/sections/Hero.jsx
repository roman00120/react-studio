import { motion } from "framer-motion";
import Container from "../components/Container.jsx";

const Hero = () => (
  <section className="relative overflow-hidden bg-hero pt-28">
    <div className="absolute inset-0 bg-grid bg-[size:140px_140px] opacity-20" aria-hidden="true" />
    <Container className="relative py-16">
      <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="badge">SaaS listo para escalar</span>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Diseñamos productos que convierten en minutos, no en meses.
          </h1>
          <p className="text-base text-slate-300 md:text-lg text-balance">
            Lumina Studio combina estrategia, UX/UI y desarrollo en un solo equipo para que lances con claridad, velocidad y una experiencia premium desde el día uno.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="button-primary" aria-label="Solicitar propuesta">
              Solicitar propuesta
            </button>
            <button className="button-secondary" aria-label="Ver casos de estudio">
              Ver casos reales
            </button>
          </div>
          <div className="flex flex-wrap gap-8 text-sm text-slate-400">
            <div>
              <p className="text-white font-semibold">+42%</p>
              <p>conversión en demos</p>
            </div>
            <div>
              <p className="text-white font-semibold">21 días</p>
              <p>para lanzar MVP</p>
            </div>
            <div>
              <p className="text-white font-semibold">10+</p>
              <p>lanzamientos SaaS</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="glass-panel rounded-3xl p-6 shadow-glow">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Resumen de lanzamiento</span>
              <span className="rounded-full bg-mint-500/15 px-3 py-1 text-mint-400">Sprint 03</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                "Narrativa de producto alineada",
                "Interfaz y flujo principal listo",
                "Landing SEO + analítica",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-slate-200">{item}</span>
                  <span className="text-xs text-mint-400">Hecho</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase text-slate-400">Impacto esperado</p>
              <p className="text-lg font-semibold text-white">+28% leads calificados</p>
            </div>
          </div>
          <div className="absolute -right-10 -top-10 hidden h-28 w-28 rounded-full bg-mint-500/20 blur-3xl md:block" />
        </motion.div>
      </div>
    </Container>
  </section>
);

export default Hero;

