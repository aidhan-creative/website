import Link from "next/link";
import { inter, lora, firaCode } from "@/app/fonts";

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="bg-base-300 text-base-content">
        <div className="container mx-auto flex items-center justify-between">
          <div id="logo" className={lora.className}>
            <Link href="/" className="text-3xl font-semibold">
              <h1 className="px-4 py-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-sky-600">
                aidhan.
              </h1>
            </Link>
          </div>
          <nav
            id="main-menu"
            className="flex items-center divide-current divide-x"
          >
            <ul className="flex pr-8 pl-4 py-2 gap-8">
              <li>
                <a href="/test">test</a>
              </li>
              <li>
                <a href="/test">test</a>
              </li>
              <li>
                <a href="/test">test</a>
              </li>
              <li>
                <a href="/test">test</a>
              </li>
            </ul>
            <ul className="flex pl-8 pr-4 py-2 gap-8">
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    <path d="M12 8a2.828 2.828 0 1 0 4 4"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="21" y1="6" x2="3" y2="6"></line>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                    <line x1="21" y1="18" x2="7" y2="18"></line>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container mx-auto flex">
        <aside id="sidebar"></aside>
        <main id="content" className="grow px-4 my-2 prose">
          {children}
        </main>
      </div>
      <footer className="bg-neutral text-neutral-content">
        <div className="container mx-auto px-2">
          <div></div>
          <div id="copyright">copyright</div>
        </div>
      </footer>
    </div>
  );
}
