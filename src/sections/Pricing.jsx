import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PricingCard from "../components/PricingCard.jsx";

const plans = [
  {
    name: "Launch",
    price: "Desde $2,900 USD",
    description: "Para validar mercado con una landing y narrativa que convierten desde el día uno.",
    features: ["Estrategia y copy", "UI premium", "Desarrollo React", "Entrega en 3 semanas"],
  },
  {
    name: "Scale",
    price: "Desde $6,500 USD",
    description: "Sitio completo para SaaS con sistema visual y performance listo para campañas.",
    features: [
      "Discovery + research ligero",
      "Sistema de diseño",
      "QA y accesibilidad",
      "Soporte 45 días",
    ],
    accent: true,
  },
  {
    name: "Partnership",
    price: "Mensual",
    description: "Acompañamiento continuo para iterar producto, contenido y conversión.",
    features: ["Squad senior", "Experimentos de growth", "Optimización continua", "Roadmap trimestral"],
  },
];

const Pricing = () => (
  <section id="pricing" className="bg-ocean-900 py-20">
    <Container>
      <div className="flex flex-col gap-10">
        <SectionHeading
          badge="Planes"
          title="Modelos claros para decidir rápido"
          subtitle="Elige el nivel de acompañamiento y empieza a generar impacto desde el primer sprint."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Pricing;

