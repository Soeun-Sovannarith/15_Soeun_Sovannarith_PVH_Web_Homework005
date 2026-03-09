export default function Card({ item, viewButton }) {
  return (
    <div className="flex items-center gap-4 bg-[#0b0d12]/50 p-4 rounded-2xl border border-gray-800/20 hover:border-gray-700/50 transition-all group">
      {/* Image */}
      <div className="w-24 h-24 shrink-0 overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.item_name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="grow">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-white font-semibold text-lg">{item.item_name}</h3>
          <span className="text-gray-400 text-sm">${item.item_price}</span>
          {item.saved && (
             <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
               <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
             </svg>
          )}
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 max-w-2xl">
          {item.item_description}
        </p>
      </div>

      {/* Action */}
      <div className="shrink-0">
        {viewButton}
      </div>
    </div>
  );
}