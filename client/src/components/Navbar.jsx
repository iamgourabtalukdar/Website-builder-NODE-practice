import { Layout, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-indigo-600 p-1.5">
              <Layout className="h-6 w-6 text-white" />
            </div>
            <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
              CRAFT.
            </span>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <a
              href="#features"
              className="font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
              Features
            </a>
            <a
              href="#contact"
              className="font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
              Contact
            </a>
            <a
              href="#how-it-works"
              className="font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
              How it Works
            </a>
            <button className="rounded-full bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700">
              Open Builder
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-4 border-b border-slate-100 bg-white p-4 md:hidden">
          <a href="#features" className="block font-medium text-slate-600">
            Features
          </a>
          <a href="#how-it-works" className="block font-medium text-slate-600">
            How it Works
          </a>
          <button className="w-full rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white">
            Open Builder
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
