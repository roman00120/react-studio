import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import InfoCard from "../components/InfoCard.jsx";

const benefits = [
  {
    icon: "⚡",
    title: "Velocidad con foco",
    highlight: "Atención",
    description: "Sprints guiados por métricas para que cada entrega tenga impacto real en ventas.",
  },
  {
    icon: "🎯",
    title: "UX que vende",
    highlight: "Interés",
    description: "Arquitectura clara, mensajes precisos y UI premium para elevar la confianza.",
  },
  {
    icon: "🧠",
    title: "Equipo senior",
    highlight: "Deseo",
    description: "Diseño y desarrollo con criterio de producto para evitar re-trabajos y retrasos.",
  },
];

const Benefits = () => (
  <section id="beneficios" className="bg-ocean-950 py-20">
    <Container>
      <div className="flex flex-col gap-10">
        <SectionHeading
          badge="Por qué Lumina"
          title="Tu lanzamiento debe sentirse inevitable"
          subtitle="Reducimos la fricción entre estrategia, diseño y desarrollo para que tu producto salga al mercado con una presencia impecable."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <InfoCard {...benefit} />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Benefits;

