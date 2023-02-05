export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-cyan-300 min-w-screen min-h-screen">
      <main className="flex justify-around items-center flex-wrap">
        <header className="p-12 flex-auto">
          <h1 className="text-6xl font-bold mb-2">Hello, world!</h1>
          <p className="text-2xl">We pull businesses into this century.</p>
        </header>

        <nav className="flex flex-auto align-center justify-around text-xl">
          <a className="px-12" href="">
            one
          </a>
          <a className="px-12" href="">
            two
          </a>
          <a className="px-12" href="">
            three
          </a>
        </nav>
      </main>
    </div>
  );
}
