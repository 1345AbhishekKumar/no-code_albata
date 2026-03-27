"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  {
    title: "Integrations",
    href: "/integrations",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Use Cases",
    href: "/use-cases",
  },
  {
    title: "Affiliate Program",
    href: "/affiliate",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "API Documentation",
    href: "/docs",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">albato</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-orange-500 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700">
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700">
              Log in
            </Button>
            <Button
              className="bg-[#FF5C00] text-white hover:bg-[#E95400]"
              size="sm"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-orange-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <Button variant="ghost" size="sm" className="justify-start text-gray-700">
                <Globe className="h-4 w-4 mr-2" />
                EN
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-gray-700">
                Log in
              </Button>
              <Button
                className="bg-[#FF5C00] text-white hover:bg-[#E95400] w-full"
                size="sm"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}