import React, { useState } from "react";
import {
  Search,
  Layout,
  ChevronRight,
  Filter,
  Eye,
  Plus,
  ArrowLeft,
  Smartphone,
  Monitor,
  CheckCircle2,
  Clock,
  Star,
  ExternalLink,
} from "lucide-react";

const CATEGORIES = [
  "All Components",
  "Navigation",
  "Hero Sections",
  "Feature Grids",
  "Testimonials",
  "Pricing Tables",
  "Contact Forms",
  "Footers",
];

const COMPONENTS_DATA = [
  {
    id: 1,
    name: "Minimal Navbar",
    category: "Navigation",
    complexity: "Simple",
    usage: 1200,
  },
  {
    id: 2,
    name: "Gradient Hero",
    category: "Hero Sections",
    complexity: "Medium",
    usage: 850,
  },
  {
    id: 3,
    name: "Feature 3-Column",
    category: "Feature Grids",
    complexity: "Simple",
    usage: 2100,
  },
  {
    id: 4,
    name: "Standard Pricing",
    category: "Pricing Tables",
    complexity: "Medium",
    usage: 450,
  },
  {
    id: 5,
    name: "Dark Mode Footer",
    category: "Footers",
    complexity: "Simple",
    usage: 980,
  },
  {
    id: 6,
    name: "Modern Contact",
    category: "Contact Forms",
    complexity: "Advanced",
    usage: 670,
  },
  {
    id: 7,
    name: "Split Hero Image",
    category: "Hero Sections",
    complexity: "Medium",
    usage: 1100,
  },
  {
    id: 8,
    name: "Testimonial Slider",
    category: "Testimonials",
    complexity: "Advanced",
    usage: 320,
  },
];

const ComponentCard = ({ item }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50">
      {/* Visual Thumbnail Placeholder */}
      <div className="relative aspect-video overflow-hidden border-b border-slate-100 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center opacity-40 transition-transform duration-500 group-hover:scale-110">
          <Layout size={48} className="text-slate-300" />
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-indigo-900/40 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
          <button className="rounded-xl bg-white p-3 text-indigo-600 shadow-lg transition-transform hover:scale-110">
            <Eye size={20} />
          </button>
          <button className="rounded-xl bg-indigo-600 p-3 text-white shadow-lg transition-transform hover:scale-110">
            <Plus size={20} />
          </button>
        </div>

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="rounded-md bg-white/90 px-2 py-1 text-[10px] font-bold tracking-wider text-slate-600 uppercase shadow-sm backdrop-blur-md">
            {item.category}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
            {item.name}
          </h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={12} fill="currentColor" />
            <span className="text-[11px] font-bold text-slate-500">4.9</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400">
            <span className="flex items-center gap-1">
              <Clock size={12} /> {item.complexity}
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={12} /> {item.usage} uses
            </span>
          </div>
          <button className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700">
            Details <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ComponentsLibrary = () => {
  const [activeCategory, setActiveCategory] = useState("All Components");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = COMPONENTS_DATA.filter((comp) => {
    const matchesCategory =
      activeCategory === "All Components" || comp.category === activeCategory;
    const matchesSearch = comp.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
      {/* Top Header */}
      <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-indigo-600 p-1.5 text-white">
              <Layout size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">CRAFT.</span>
          </div>

          <div className="relative hidden md:flex">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search UI blocks..."
              className="w-80 rounded-xl border-none bg-slate-100 py-2.5 pr-4 pl-10 text-sm transition-all focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50">
            <ArrowLeft size={16} /> Back to Editor
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-indigo-700">
            Submit Component <ExternalLink size={16} />
          </button>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-400 flex-1">
        {/* Left Sidebar */}
        <aside className="sticky top-20 hidden h-[calc(100vh-80px)] w-64 overflow-y-auto border-r border-slate-200 p-8 lg:block">
          <h2 className="mb-6 text-xs font-black tracking-widest text-slate-400 uppercase">
            Explore Library
          </h2>
          <nav className="space-y-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-50 text-indigo-700 shadow-sm shadow-indigo-100/50"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          <div className="relative mt-12 overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 to-violet-700 p-6 text-white">
            <div className="relative z-10">
              <p className="mb-2 text-[10px] font-bold tracking-widest uppercase opacity-80">
                Pro Access
              </p>
              <h4 className="mb-4 text-lg leading-tight font-bold">
                Unlock 500+ Premium Blocks
              </h4>
              <button className="w-full rounded-xl bg-white py-2 text-xs font-bold text-indigo-600 transition-colors hover:bg-indigo-50">
                Go Pro
              </button>
            </div>
            <div className="absolute right-0 bottom-0 -mr-4 -mb-4 opacity-10">
              <Layout size={100} />
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 md:p-12">
          {/* Welcome/Stats Bar */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="mb-2 text-3xl font-black text-slate-900">
                Build faster with Patterns.
              </h1>
              <p className="font-medium text-slate-500">
                Browse our curated collection of production-ready Tailwind
                components.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2">
                <Monitor size={16} className="text-indigo-500" />
                <span className="text-xs font-bold text-slate-700">
                  84 Desktop Ready
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2">
                <Smartphone size={16} className="text-emerald-500" />
                <span className="text-xs font-bold text-slate-700">
                  Responsive First
                </span>
              </div>
            </div>
          </div>

          {/* Grid View */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredComponents.length > 0 ? (
              filteredComponents.map((item) => (
                <ComponentCard key={item.id} item={item} />
              ))
            ) : (
              <div className="col-span-full rounded-4xl border border-dashed border-slate-200 bg-white py-20 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-slate-100 bg-slate-50">
                  <Filter size={32} className="text-slate-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-800">
                  No components found
                </h3>
                <p className="text-slate-500">
                  Try adjusting your filters or search keywords.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All Components");
                    setSearchQuery("");
                  }}
                  className="mt-6 font-bold text-indigo-600 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Footer of the Library */}
          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-200 py-12 md:flex-row">
            <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
              <a href="#" className="transition-colors hover:text-indigo-600">
                Documentation
              </a>
              <a href="#" className="transition-colors hover:text-indigo-600">
                License
              </a>
              <a href="#" className="transition-colors hover:text-indigo-600">
                Changelog
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              MADE BY <span className="text-indigo-600">STUDENT NAME</span> •
              FYP 2024
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ComponentsLibrary;
