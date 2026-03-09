export default function Sidebar() {
  const menuItems = ["Overview", "Items", "Orders", "Customers", "Settings"];

  return (
    <aside className="w-60 bg-[#0b0d12] p-4 rounded-3xl m-4 h-fit min-h-[500px] border border-gray-800/20 shadow-2xl">
      <div className="mb-4 ml-2">
        <span className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">
          Menu
        </span>
      </div>

      <nav className="flex flex-col gap-2 h-screen">
        {menuItems.map((item) => (
          <div
            key={item}
            className="w-full text-left px-5 py-2 rounded-xl bg-[#161a21] text-white text-sm 
                     border border-white/5"
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}