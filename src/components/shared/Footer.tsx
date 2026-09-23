import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const socialLinks = [
  { label: "X", href: "https://x.com" },
  { label: "in", href: "https://linkedin.com" },
  { label: "f", href: "https://facebook.com" },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#1688d4] bg-[#001b2e] text-white">
      <div className="container mx-auto px-6 py-4 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row sm:items-start">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Hero.io home"
          >
            <Image
              src={logo}
              alt="Hero.io logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-[10px] font-semibold tracking-tight">
              HERO.IO
            </span>
          </Link>

          <div className="text-center sm:text-left">
            <p className="text-[11px] font-medium">Social Links</p>
            <div className="mt-2 flex justify-center gap-2 sm:justify-start">
              {socialLinks.map((socialLink) => (
                <Link
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={socialLink.label}
                  className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-bold leading-none text-[#001b2e] transition-opacity hover:opacity-70"
                >
                  {socialLink.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 border-t border-white/10 pt-3 text-center text-[9px] text-white/80">
          Copyright © 2025 - All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
