import {
  ChevronRight,
  Code2,
  Download,
  Layout,
  Monitor,
  MousePointer2,
  Palette,
  Smartphone,
} from "lucide-react";

import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import Step from "../components/Step";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 pt-32 pb-20">
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-6 inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-bold tracking-wide text-indigo-600">
            100% MANUAL • NO AI GENERATION
          </span>
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
            The architect is <span className="text-indigo-600">you.</span>{" "}
            <br />
            Not an algorithm.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Build production-ready websites by dragging and dropping
            hand-crafted UI components. Clean Tailwind code, total creative
            control.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 sm:w-auto">
              Start Building Now <ChevronRight size={20} />
            </button>
            <button className="w-full rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:bg-slate-50 sm:w-auto">
              View Components
            </button>
          </div>

          {/* Editor Preview Image */}
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-indigo-500 to-purple-600 opacity-20 blur"></div>
            <div className="relative flex aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div className="hidden w-64 border-r border-slate-100 bg-slate-50 p-4 md:block">
                <div className="mb-4 h-8 w-full rounded-lg bg-slate-200"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-12 w-full rounded border border-slate-200 bg-white"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center p-8">
                <MousePointer2 className="mb-4 h-12 w-12 animate-bounce text-indigo-200" />
                <p className="font-medium text-slate-400">
                  Drag components to the canvas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Everything you need to build.
            </h2>
            <p className="text-slate-500">
              Fine-tuned for students and developers who want code they can
              actually read.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={MousePointer2}
              title="Drag & Drop"
              description="Intuitive visual builder powered by @dnd-kit. Move sections, buttons, and text with ease."
            />
            <FeatureCard
              icon={Palette}
              title="Live Styling"
              description="Adjust margins, padding, colors, and fonts instantly via the properties panel."
            />
            <FeatureCard
              icon={Download}
              title="Clean Export"
              description="Download your site as a single HTML file with Tailwind CSS. No messy framework overhead."
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[3rem] bg-indigo-900 p-12 text-white md:p-20">
            <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-indigo-500 opacity-20 blur-[120px]"></div>
            <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold">
                  Build your first page in minutes.
                </h2>
                <div className="mt-10 space-y-8">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="mb-1 text-xl font-bold">
                        Pick a Component
                      </h4>
                      <p className="text-indigo-200">
                        Choose from our library of Navbars, Heroes, and Cards.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="mb-1 text-xl font-bold">
                        Customize Properties
                      </h4>
                      <p className="text-indigo-200">
                        Change colors, text, and spacing to match your brand.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="mb-1 text-xl font-bold">
                        Export & Launch
                      </h4>
                      <p className="text-indigo-200">
                        Get the source code and host it anywhere instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-4 w-1/2 rounded bg-white/20"></div>
                  <div className="h-24 w-full rounded-xl bg-white/10"></div>
                  <div className="h-4 w-3/4 rounded bg-white/20"></div>
                  <div className="flex gap-2">
                    <div className="h-8 w-24 rounded-lg bg-indigo-500"></div>
                    <div className="h-8 w-24 rounded-lg bg-white/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How it Works Section - Now Using Step Component */}
      <section id="how-it-works" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Start Creating in 3 Simple Steps
            </h2>
            <p className="mx-auto max-w-xl leading-relaxed text-slate-600">
              Our workflow is designed to give you the speed of a builder with
              the precision of a professional developer.
            </p>
          </div>

          <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            <Step
              number="1"
              title="Pick Your Components"
              description="Browse through a library of pre-built, responsive elements like headers, cards, and forms."
            />
            <Step
              number="2"
              title="Drag and Drop"
              description="Position elements exactly where you want them on the canvas. No code required for layout."
            />
            <Step
              number="3"
              title="Customize & Export"
              description="Fine-tune styles using the property panel and download your clean Tailwind HTML instantly."
            />
          </div>

          {/* Indigo Feature Highlight */}
          <div className="relative overflow-hidden rounded-[3rem] bg-indigo-900 p-12 text-white md:p-20">
            <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-indigo-500 opacity-20 blur-[120px]"></div>
            <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold">
                  Production-ready code at your fingertips.
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-indigo-100">
                  Unlike other builders that generate messy, unreadable code,
                  Craft produces clean HTML5 and Tailwind CSS utility classes
                  that you can actually understand and maintain.
                </p>
                <button className="rounded-xl bg-white px-6 py-3 font-bold text-indigo-900 transition-colors hover:bg-indigo-50">
                  Explore Export Features
                </button>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <div className="space-y-4 font-mono text-xs text-indigo-200">
                  <div className="flex gap-2">
                    <span className="text-pink-400">&lt;div</span>
                    <span className="text-yellow-200">class=</span>
                    <span className="text-green-300">
                      "p-8 bg-white rounded-xl shadow-lg"
                    </span>
                    <span className="text-pink-400">&gt;</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-pink-400">&lt;h1</span>
                    <span className="text-yellow-200">class=</span>
                    <span className="text-green-300">"text-2xl font-bold"</span>
                    <span className="text-pink-400">&gt;</span>
                    <span className="text-white">Hello World</span>
                    <span className="text-pink-400">&lt;/h1&gt;</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-pink-400">&lt;button</span>
                    <span className="text-yellow-200">class=</span>
                    <span className="text-green-300">
                      "mt-4 px-4 py-2 bg-blue-600"
                    </span>
                    <span className="text-pink-400">&gt;</span>
                    <span className="text-white">Click Me</span>
                    <span className="text-pink-400">&lt;/button&gt;</span>
                  </div>
                  <div className="text-pink-400">&lt;/div&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Layout className="h-5 w-5 text-indigo-600" />
            <span className="text-lg font-bold text-slate-900">CRAFT.</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2024 Craft Website Builder. Final Year Project.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-indigo-600"
            >
              <Code2 size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-indigo-600"
            >
              <Monitor size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-indigo-600"
            >
              <Smartphone size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
