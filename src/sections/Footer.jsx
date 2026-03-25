import Container from "../components/Container.jsx";

const Footer = () => (
  <footer className="border-t border-white/10 bg-ocean-950 py-12">
    <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint-500/15 text-mint-400">◉</span>
          <div>
            <p className="text-sm font-semibold">Lumina Studio</p>
            <p className="text-xs text-slate-400">Producto digital</p>
          </div>
        </div>
        <p className="text-sm text-slate-400">
          Portafolio de Roman Velasco Moctezuma · Diseño y desarrollo para startups que necesitan lanzar con calidad y velocidad.
        </p>
      </div>
      <div className="grid gap-3 text-sm text-slate-400 md:text-right">
        <p>romy00120@gmaill.com</p>
        <p>Guadalajara, Jalisco · Remoto global</p>
        <p>© 2026 Lumina Studio. Todos los derechos reservados.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;

