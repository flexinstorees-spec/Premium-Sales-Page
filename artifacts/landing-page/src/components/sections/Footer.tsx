export function Footer() {
  return (
    <footer className="w-full py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-sans text-xs text-muted-foreground/60 font-light">
          &copy; {new Date().getFullYear()} +250 Ideias de Cerâmica Fria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
