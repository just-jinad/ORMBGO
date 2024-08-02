import React from "react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        className="flex items-center gap-2 font-medium text-gray-800 hover:text-gray-600"
      >
        {children}
      </a>
    </li>
  );
}


export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolling ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1
          className={`text-lg font-bold ${
            isScrolling ? "text-green-800" : "text-white"
          }`}
        >
          ORMBGO
        </h1>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            className={`text-sm font-medium ${
              isScrolling ? "text-gray-800" : "text-white"
            } hover:text-gray-600`}
          >
            Contact Us
          </button>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <button
              className={`text-sm font-medium ${
                isScrolling ? "text-gray-800" : "text-white"
              } hover:text-gray-600`}
            >
              Give 💖
            </button>
          </a>
        </div>
        <button
          onClick={handleOpen}
          className={`ml-auto inline-block lg:hidden ${
            isScrolling ? "text-gray-800" : "text-white"
          }`}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col items-center gap-4">
            <button className="text-sm font-medium text-gray-800 hover:text-gray-600">
              Contact Us
            </button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <button className="text-sm font-medium text-gray-800 hover:text-gray-600">
                Give 💖
              </button>
            </a>
         
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
