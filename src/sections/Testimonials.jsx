import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";

const testimonials = [
  {
    quote: "Nuestro pipeline de demos subió 2x. El sitio se siente premium y el mensaje es claro.",
    name: "Camila Ortega",
    role: "Head of Growth",
    company: "Nebula Cloud",
  },
  {
    quote: "El equipo entendió nuestro producto en días y entregó un launch que parece de Serie A.",
    name: "Luis Herrera",
    role: "CEO",
    company: "SignalPay",
  },
  {
    quote: "Nos dieron estructura, diseño y un front-end listo para iterar sin fricción.",
    name: "Andrea Ruiz",
    role: "Product Manager",
    company: "Pulse AI",
  },
];

const Testimonials = () => (
  <section id="testimonios" className="bg-ocean-950 py-20">
    <Container>
      <div className="flex flex-col gap-10">
        <SectionHeading
          badge="Testimonios"
          title="Confianza ganada en cada sprint"
          subtitle="Clientes que querían lanzar con impacto y hoy tienen un producto listo para crecer."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Testimonials;

