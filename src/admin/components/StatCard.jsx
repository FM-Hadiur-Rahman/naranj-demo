function StatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-400">{title}</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">{value}</h3>
          {subtitle && (
            <p className="mt-2 text-sm text-neutral-500">{subtitle}</p>
          )}
        </div>

        {Icon && (
          <div className="rounded-2xl bg-white/5 p-3 text-orange-400">
            <Icon size={22} />
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;
