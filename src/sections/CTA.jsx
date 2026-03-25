import { motion } from "framer-motion";
import Container from "../components/Container.jsx";

const CTA = () => (
  <section className="bg-ocean-950 py-20">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-panel relative overflow-hidden rounded-3xl p-10"
      >
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-mint-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-8 -left-10 h-28 w-28 rounded-full bg-sun-500/20 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="badge">Acción</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Tu próximo lanzamiento puede verse premium en 21 días.</h2>
            <p className="text-sm text-slate-300 md:text-base">
              Agenda una llamada y recibe un mini plan de mejora con prioridades claras.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="button-primary" aria-label="Agendar llamada estratégica">
              Agendar llamada
            </button>
            <button className="button-secondary" aria-label="Descargar deck">
              Descargar deck
            </button>
          </div>
        </div>
      </motion.div>
    </Container>
  </section>
);

export default CTA;

