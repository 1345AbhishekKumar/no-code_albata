import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Integrations", href: "/integrations" },
      { title: "Pricing", href: "/pricing" },
      { title: "Security", href: "/security" },
      { title: "API", href: "/api" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Contact Us", href: "/contact" },
      { title: "Brand Assets", href: "/brand" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Help Center", href: "/help" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Webinars", href: "/webinars" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold text-gray-900">albato</span>
            </Link>
            <div className="flex space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Facebook className="h-5 w-5 text-gray-500" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Twitter className="h-5 w-5 text-gray-500" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Linkedin className="h-5 w-5 text-gray-500" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Youtube className="h-5 w-5 text-gray-500" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Albato. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-xs text-gray-500">
              Terms
            </Button>
            <Button variant="ghost" size="sm" className="text-xs text-gray-500">
              Privacy
            </Button>
            <Button variant="ghost" size="sm" className="text-xs text-gray-500">
              Cookies
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}