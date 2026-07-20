export default function Navbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-blue-600">
        DevSync
      </h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Logout
      </button>
    </header>
  );
}