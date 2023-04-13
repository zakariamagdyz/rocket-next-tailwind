import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuState] = useState(false);

  const onMobileMenuClick = () => {
    setMobileMenuState((prevState) => !prevState);
  };
  const shouldOpenMobileMenu = isMobileMenuOpen ? "flex" : "hidden";

  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <button
          id="hamburger-open-button"
          className=" cursor-pointer text-3xl md:hidden"
          onClick={onMobileMenuClick}
        >
          &#9776;
        </button>

        <nav className="hidden text-xl md:block" aria-label="main">
          <ul className="flex space-x-8">
            <li>
              <a href="#rockets" className="hover:opacity-90">
                Our Rockets
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:opacity-90">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section
        id="mobile-menu"
        className={` absolute top-0 w-full origin-top animate-open-menu flex-col justify-center bg-black text-5xl ${shouldOpenMobileMenu}`}
      >
        <button className="self-end px-6 text-8xl" onClick={onMobileMenuClick}>
          &times;
        </button>
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          onClick={onMobileMenuClick}
          aria-label="mobile"
        >
          <a href="#hero" className="w-full py-6 text-center hover:opacity-90">
            Home
          </a>
          <a
            href="#rockets"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Rockets
          </a>
          <a
            href="#testimonials"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Contact
          </a>
          <a
            href="#footer"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
