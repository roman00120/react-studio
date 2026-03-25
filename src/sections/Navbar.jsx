import Container from "../components/Container.jsx";

const navLinks = [
  { label: "Beneficios", href: "#beneficios" },
  { label: "Features", href: "#features" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Planes", href: "#pricing" },
];

const Navbar = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ocean-950/80 backdrop-blur-xl">
    <Container className="flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-2 text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint-500/15 text-mint-400">
          ◉
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold">Lumina Studio</p>
          <p className="text-[11px] text-slate-400">Producto digital</p>
        </div>
      </a>
      <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button className="button-primary" aria-label="Agendar consultoría">
        Agendar llamada
      </button>
    </Container>
  </header>
);

export default Navbar;

