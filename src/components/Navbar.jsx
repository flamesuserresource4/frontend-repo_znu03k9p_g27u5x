import { Menu, Camera, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-sm bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 grid place-items-center text-white shadow-sm">
            <Camera size={18} />
          </div>
          <span className="font-semibold tracking-tight text-gray-800">InstaVibes</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#gallery" className="hover:text-gray-900 transition-colors">Gallery</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
            <Search size={16} />
            <input 
              placeholder="Search"
              className="bg-transparent outline-none text-sm placeholder:text-gray-400 w-32"
            />
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-black/5 text-gray-700">
            <Menu size={20} />
          </button>
          <a href="#get-started" className="hidden md:inline-flex px-3 py-1.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors">Get started</a>
        </div>
      </div>
    </header>
  );
}
