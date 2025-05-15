"use client";
import Link from "next/link";
import { Button } from "./ui/Button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f2d] bg-opacity-60 backdrop-blur-md mx-auto p-4 md:px-12 md:py-6">
      <div className="flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link
          href="/"
          className="text-white text-2xl font-bold flex items-center gap-x-2"
        >
          <Image src="/logo.svg" alt="Portfolio LOGO" width={50} height={50} />
          <span>Tayyab Faisal</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                href={item.link}
                key={item.link}
                className={`text-lg space-x-1 border-b-4 ${
                  isActive
                    ? "text-white border-white"
                    : "text-white/70 border-transparent hover:text-white"
                } pb-1 transition-all`}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Contact Us Button for Desktop */}
        <div className="hidden md:block">
          <Link href="/contact-us">
            <Button className="bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] text-white hover:opacity-80">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-[#0f0f2d]"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((item) => {
                  const isActive = pathname === item.link;
                  return (
                    <Link
                      href={item.link}
                      key={item.link}
                      className={`text-lg flex items-center space-x-2 p-2 border-b-2 ${
                        isActive
                          ? "text-white border-white"
                          : "text-white/70 border-transparent hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
                <Link href="/contact-us" className="mt-4">
                  <Button className="w-full bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] text-white hover:opacity-80">
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
