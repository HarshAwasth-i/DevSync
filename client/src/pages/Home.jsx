import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      title: "Project Management",
      icon: "📁",
      desc: "Organize multiple software projects with a clean and intuitive workspace.",
    },
    {
      title: "Task Tracking",
      icon: "✅",
      desc: "Create, assign and monitor tasks with progress tracking.",
    },
    {
      title: "Kanban Board",
      icon: "🧩",
      desc: "Drag and drop tasks between workflow stages.",
    },
    {
      title: "Dashboard Analytics",
      icon: "📊",
      desc: "Track productivity with charts and project insights.",
    },
    {
      title: "Team Collaboration",
      icon: "👥",
      desc: "Collaborate with teammates and manage responsibilities.",
    },
    {
      title: "Secure Authentication",
      icon: "🔐",
      desc: "JWT authentication with protected routes.",
    },
  ];

  const tech = [
    "React",
    "Node.js",
    "Express",
    "MySQL",
    "JWT",
    "Tailwind CSS",
    "Render",
    "Railway",
    "Vercel",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-extrabold text-blue-600">DevSync</h1>

          <div className="hidden md:flex gap-8 text-gray-700">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#tech" className="hover:text-blue-600">Tech Stack</a>
            <a href="https://github.com/HarshAwasth-i" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              GitHub
            </a>
          </div>

          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
          >
            Login
          </Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-semibold">
            Full Stack Project
          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight">
            Project Management
            <span className="block text-blue-600">Made Simple.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            DevSync helps developers and teams organize projects,
            collaborate efficiently, manage tasks and visualize progress
            through a modern dashboard and Kanban workflow.
          </p>

          <div className="flex gap-4 mt-10">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-7 py-3 rounded-xl hover:scale-105 transition"
            >
              Get Started
            </Link>

            <a
              href="https://github.com/HarshAwasth-i"
              target="_blank"
              rel="noreferrer"
              className="border border-blue-600 text-blue-600 px-7 py-3 rounded-xl hover:bg-blue-50 transition"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="rounded-3xl shadow-2xl overflow-hidden border bg-white">
          <img
            src="/dashboard-preview.png"
            alt="Dashboard Preview"
            className="w-full"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["Projects","3+"],
            ["Modules","8+"],
            ["Responsive","100%"],
            ["Authentication","JWT"],
          ].map(([k,v])=>(
            <div key={k} className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-4xl font-black text-blue-600">{v}</h3>
              <p className="mt-2 text-gray-600">{k}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-14">
          Why Choose DevSync?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item)=>(
            <div key={item.title}
              className="bg-white rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition p-8">
              <div className="text-5xl">{item.icon}</div>
              <h3 className="text-2xl font-bold mt-5">{item.title}</h3>
              <p className="text-gray-600 mt-3 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tech" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-12">Built With</h2>

          <div className="flex flex-wrap justify-center gap-5">
            {tech.map((t)=>(
              <span key={t}
                className="px-6 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold shadow">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white text-center p-14 shadow-2xl">
          <h2 className="text-5xl font-bold">
            Ready to Boost Your Productivity?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Start managing your projects with DevSync today.
          </p>

          <Link
            to="/login"
            className="inline-block mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Launch DevSync
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">DevSync</h3>
            <p>Project Management Workspace</p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/HarshAwasth-i" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <Link to="/login">Login</Link>
          </div>

          <p>© 2026 Harsh Awasthi</p>
        </div>
      </footer>
    </div>
  );
}
