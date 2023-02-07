export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-cyan-300 min-w-screen min-h-screen">
      <header className="flex justify-around items-center flex-wrap">
        <div className="flex-auto p-12">
          <h1 className="text-6xl font-bold mb-2">Hello, world!</h1>
          <p className="text-2xl">We pull businesses into this century.</p>
        </div>

        <nav className="flex flex-auto align-center justify-around text-xl p-6">
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
      </header>
      <main className="p-6">
        <div className="grid grid-cols-6 gap-4 max-w-full flex-wrap">
          <div className="col-span-6">
            <div className="p-12">test</div>
          </div>
          <div className="border-2 rounded-2xl border-neutral-600/25 bg-white col-span-4">
            <div className="p-12">test</div>
          </div>
          <div className="border-2 rounded-2xl border-neutral-600/25 bg-white col-span-2">
            <div className="p-12">test</div>
          </div>
          <div className="border-2 rounded-2xl border-neutral-600/25 bg-white col-span-3">
            <div className="p-12">test</div>
          </div>
          <div className="border-2 rounded-2xl border-neutral-600/25 bg-white col-span-3">
            <div className="p-12">test</div>
          </div>
        </div>
      </main>
    </div>
  );
}
