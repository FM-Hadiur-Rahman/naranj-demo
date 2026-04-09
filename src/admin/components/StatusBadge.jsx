const statusMap = {
  new: {
    label: "Neu",
    className: "bg-orange-500/15 text-orange-300 ring-orange-500/20",
  },
  accepted: {
    label: "Akzeptiert",
    className: "bg-sky-500/15 text-sky-300 ring-sky-500/20",
  },
  preparing: {
    label: "In Zubereitung",
    className: "bg-yellow-500/15 text-yellow-300 ring-yellow-500/20",
  },
  ready: {
    label: "Bereit",
    className: "bg-purple-500/15 text-purple-300 ring-purple-500/20",
  },
  out_for_delivery: {
    label: "Unterwegs",
    className: "bg-indigo-500/15 text-indigo-300 ring-indigo-500/20",
  },
  delivered: {
    label: "Geliefert",
    className: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/20",
  },
  cancelled: {
    label: "Storniert",
    className: "bg-red-500/15 text-red-300 ring-red-500/20",
  },
};

function StatusBadge({ status }) {
  const current = statusMap[status] || {
    label: status,
    className: "bg-white/10 text-white ring-white/10",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ${current.className}`}
    >
      {current.label}
    </span>
  );
}

export default StatusBadge;
