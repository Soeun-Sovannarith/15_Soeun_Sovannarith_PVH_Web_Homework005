"use client";

export default function Navbar({ searchBar }) {
  return (
    <>
      <nav className="w-full bg-[#0f1216] flex items-center justify-between px-4 py-2 shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3 h-15">
          <img
            src="https://media.printler.com/media/photo/176171-1.jpg?rmode=crop&width=638&height=900"
            alt="avatar"
            className="w-15 h-15 rounded-full object-cover border-2 border-white"
          />
          <span className="text-white font-semibold text-2xl">Prof. CHHINH CI/CD testing</span>
        </div>

        {searchBar}
      </nav>
    </>
  );
}
