export default function Footer() {
  return (
    <footer className="relative bg-[#050505] py-8 border-t border-gray-800 text-center text-gray-400 text-sm">
      <p>
        © {new Date().getFullYear()} ECLIPSE STUDIO — Designed & Developed by
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 ml-1 font-medium">
          J
        </span>
      </p>

      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-30"></div>
    </footer>
  );
}