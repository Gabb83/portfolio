export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
          <span className="text-green-500">&lt;</span>
          GE
          <span className="text-green-500"> /&gt;</span>
        </div>

        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 text-center sm:text-right">
          © {anoAtual} Gabriel Evangelista. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}