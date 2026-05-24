export function Footer() {
  return (
    <footer className="w-full py-10 bg-card border-t border-border mt-10">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <h2 className="font-serif text-2xl text-foreground mb-2">+250 Ideias de Cerâmica Fria</h2>
        <p className="text-muted-foreground text-sm font-light mb-6">
          Para iniciantes e artesãs que querem criar peças lindas desde o primeiro dia.
        </p>

        <div className="flex gap-6 mb-8 text-sm text-muted-foreground/80 font-light">
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Contato</a>
        </div>

        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} +250 Ideias de Cerâmica Fria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
