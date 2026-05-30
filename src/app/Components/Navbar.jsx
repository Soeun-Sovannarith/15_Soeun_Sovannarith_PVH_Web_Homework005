"use client";

export default function Navbar({ searchBar }) {
  return (
    <>
      <nav className="w-full bg-[#0f1216] flex flex-col sm:flex-row items-center justify-between px-3 sm:px-4 py-2 gap-3 sm:gap-0 shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2 sm:gap-3 h-12 sm:h-15">
          <img
            src="https://coin-images.coingecko.com/coins/images/66868/large/1hz8mg7dk625tp1kzy43cq4gtpsp.?1750886735"
            alt="avatar"
            className="w-12 h-12 sm:w-15 sm:h-15 rounded-full object-cover border-2 border-white"
          />
          <span className="text-white font-semibold text-base sm:text-2xl">Group2 - CI/CD testing</span>
        </div>

        {searchBar}
      </nav>
    </>
  );
}
