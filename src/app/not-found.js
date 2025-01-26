export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-lime-950/50">
      <div className="text-center block w-full max-w-[260px] md:max-w-full">
        <h1 className="text-2xl text-lime-950">Felltop Digital</h1>
        <p className="text-lime-200 text-sm">Page not found, please head back <Link className="underline" href="/">Home</Link>.</p>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Felltop Digital | 404 Page',
}
