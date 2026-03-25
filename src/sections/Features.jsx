import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const features = [
  {
    title: "Posicionamiento claro",
    description: "Definimos mensaje, narrativa y estructura para que el usuario entienda tu valor en segundos.",
    bullets: ["Storyline de producto", "Arquitectura de contenido", "Propuesta diferenciada"],
  },
  {
    title: "Diseño premium",
    description: "Interfaces limpias y modernas que comunican confianza desde el primer scroll.",
    bullets: ["Sistema visual", "Componentes reutilizables", "Microinteracciones"],
  },
  {
    title: "Desarrollo listo para crecer",
    description: "Frontend optimizado con performance, SEO y analítica para escalar campañas sin fricción.",
    bullets: ["React + Tailwind", "Core Web Vitals", "Eventos de conversión"],
  },
];

const Features = () => (
  <section id="features" className="bg-ocean-900 py-20">
    <Container>
      <div className="flex flex-col gap-12">
        <SectionHeading
          badge="Cómo trabajamos"
          title="Un sistema integral de lanzamiento"
          subtitle="Nos enfocamos en lo que mueve el negocio: claridad, velocidad y confianza."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sun-500" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Features;

