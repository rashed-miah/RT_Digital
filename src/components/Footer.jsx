import { Link } from "react-router-dom";
import { FiMail, FiMap, FiPhone } from "react-icons/fi";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";
import logo from "../assets/logo.svg";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#171a3a]/90 text-white backdrop-blur-2xl"
      id="footer"
    >
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 xl:px-10">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/20 py-8 sm:flex-row sm:items-center sm:py-10">
          <Link to="/" id="footer-logo-link" className="shrink-0">
            <img
              src={logo}
              alt="RT Digital logo"
              className="h-[56px] w-auto object-contain xl:h-[76px]"
            />
          </Link>

          <div className="flex items-center gap-3" aria-label="Social media">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex size-12 items-center justify-center rounded-full bg-[#9807C8] text-white transition-colors hover:bg-white hover:text-[#9807C8]"
            >
              <SiInstagram size={21} />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="flex size-12 items-center justify-center rounded-full bg-[#9807C8] text-white transition-colors hover:bg-white hover:text-[#9807C8]"
            >
              <SiTiktok size={20} />
            </a>
            <a
              href="https://wa.me/08801746050146"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex size-12 items-center justify-center rounded-full bg-[#9807C8] text-white transition-colors hover:bg-white hover:text-[#9807C8]"
            >
              <SiWhatsapp size={21} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:py-14">
          <nav aria-label="Footer navigation">
            <h2 className="mb-6 text-xl font-semibold uppercase">
              Quick Links
            </h2>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {footerLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    id={`footer-link-${label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 transition-colors duration-200 hover:text-[#9807C8]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact-heading">
            <h2
              id="footer-contact-heading"
              className="mb-6 text-xl font-semibold uppercase"
            >
              Contact Us
            </h2>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              <li>
                <a
                  href="tel:+08801746050146"
                  className="flex items-center gap-3 text-gray-300 transition-colors hover:text-[#9807C8]"
                >
                  <FiPhone className="shrink-0 text-[#9807C8]" size={19} />
                  +08801746050146
                </a>
              </li>
              <li>
                <a
                  href="mailto:developer.rashedmiah@gmail.com"
                  className="flex items-center gap-3 text-gray-300 transition-colors hover:text-[#9807C8]"
                >
                  <FiMail className="shrink-0 text-[#9807C8]" size={19} />
                  developer.rashedmiah@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Mirpur+12,+Dhaka,+Bangladesh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-gray-300 transition-colors hover:text-[#9807C8]"
                >
                  <FiMap className="mt-1 shrink-0 text-[#9807C8]" size={19} />
                  <span>Mirpur 12, Dhaka, Bangladesh</span>
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="footer-newsletter-heading">
            <h2
              id="footer-newsletter-heading"
              className="mb-6 text-xl font-semibold uppercase"
            >
              Subscribe to our newsletter
            </h2>
            <form className="flex min-h-16 items-center rounded-xl border border-white/20 p-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email"
                className="min-w-0 flex-1 bg-transparent px-4 text-white outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                className="shrink-0 rounded-full bg-[#9807C8] px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-[#7a06a0] sm:px-8"
              >
                Subscribe
              </button>
            </form>
          </section>
        </div>

        <div className="border-t border-white/20 py-6 text-left sm:text-center">
          <p className="m-0 text-sm text-gray-300">
            &copy; {currentYear} RT Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
