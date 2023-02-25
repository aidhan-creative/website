import Link from "next/link";
import { inter, lora, firaCode } from "@/app/fonts";

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="bg-base-200 text-base-content">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <div id="logo" className={lora.className}>
            <Link href="/" className="text-3xl font-semibold">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-sky-600">
                aidhan.
              </h1>
            </Link>
          </div>
          <nav id="main-menu" className="flex grow items-center gap-8 font-inter">
            <ul id="desktop-menu" className="hidden md:flex grow items-center justify-end gap-8 font-medium">
              <li>
                <a href="/test" className="hover:text-primary-focus">
                  test
                </a>
              </li>
              <li>
                <a href="/test" className="hover:text-primary-focus">
                  test
                </a>
              </li>
              <li>
                <a href="/test" className="hover:text-primary-focus">
                  test
                </a>
              </li>
              <li>
                <a href="/test" className="hover:text-primary-focus">
                  test
                </a>
              </li>
            </ul>
            <ul
              id="functions-menu"
              className="hidden md:flex items-center gap-8">
              <div
                id="menu-divider"
                className="border-l-2 border-base-300 py-6"></div>

              <li>
                <a href="#">
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hover:text-primary-focus">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </a>
                  </li>
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:text-primary-focus">
                    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:text-primary-focus">
                    <line x1="21" y1="4" x2="14" y2="4"></line>
                    <line x1="10" y1="4" x2="3" y2="4"></line>
                    <line x1="21" y1="12" x2="12" y2="12"></line>
                    <line x1="8" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="20" x2="16" y2="20"></line>
                    <line x1="12" y1="20" x2="3" y2="20"></line>
                    <line x1="14" y1="2" x2="14" y2="6"></line>
                    <line x1="8" y1="10" x2="8" y2="14"></line>
                    <line x1="16" y1="18" x2="16" y2="22"></line>
                  </svg>
                </a>
              </li>
            </ul>
            <ul id="mobile-menu" className="flex md:hidden grow justify-end">
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
                    strokeLinejoin="round">
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
      <div className="container mx-auto flex px-4 py-6">
        <aside id="sidebar"></aside>
        <main id="content" className="grow prose">
          {children}
        </main>
      </div>
      <footer className="bg-neutral text-neutral-content">
        <div className="container mx-auto px-4 py-6">
          <div></div>
          <div id="copyright">copyright</div>
        </div>
      </footer>
    </div>
  );
}
