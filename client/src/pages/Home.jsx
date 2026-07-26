import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-extrabold text-blue-600">
          DevSync
        </h1>

        <p className="text-2xl font-semibold mt-6 text-gray-800">
          Manage Projects. Track Tasks. Collaborate.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          A modern project management platform built with React,
          Node.js, Express, MySQL and JWT Authentication.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          <a
            href="https://github.com/HarshAwasth-i/DevSync"
            target="_blank"
            rel="noreferrer"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-xl mb-2">
              📁 Project Management
            </h3>
            <p className="text-gray-600">
              Organize and manage multiple software projects efficiently.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-xl mb-2">
              ✅ Task Tracking
            </h3>
            <p className="text-gray-600">
              Create, assign and monitor tasks with ease.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-xl mb-2">
              📊 Dashboard
            </h3>
            <p className="text-gray-600">
              Visualize project progress using charts and statistics.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-xl mb-2">
              🧩 Kanban Board
            </h3>
            <p className="text-gray-600">
              Drag and drop tasks across workflow stages.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-xl mb-2">
              👥 Team Collaboration
            </h3>
            <p className="text-gray-600">
              Work together with teams and manage responsibilities.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-xl mb-2">
              🔒 Secure Authentication
            </h3>
            <p className="text-gray-600">
              JWT-based authentication with protected routes.
            </p>
          </div>

        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          Built With
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-lg">

          <span className="px-5 py-2 rounded-full bg-blue-100">
            React
          </span>

          <span className="px-5 py-2 rounded-full bg-green-100">
            Node.js
          </span>

          <span className="px-5 py-2 rounded-full bg-yellow-100">
            Express
          </span>

          <span className="px-5 py-2 rounded-full bg-red-100">
            MySQL
          </span>

          <span className="px-5 py-2 rounded-full bg-purple-100">
            JWT
          </span>

          <span className="px-5 py-2 rounded-full bg-cyan-100">
            Tailwind CSS
          </span>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>© 2026 Harsh Awasthi • DevSync</p>
      </footer>
    </div>
  );
}