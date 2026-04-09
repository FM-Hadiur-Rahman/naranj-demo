import { Gift, Star, Trophy } from "lucide-react";

function Rewards() {
  const points = 120;
  const nextReward = 150;
  const progress = Math.min((points / nextReward) * 100, 100);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
          Rewards
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Treuepunkte & Belohnungen
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Jede Bestellung bringt Punkte. Je mehr Punkte, desto mehr Vorteile und
          Rabatte für Stammkunden.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/20 to-red-500/20 p-8">
          <div className="flex items-center gap-3">
            <Star className="text-orange-300" />
            <h2 className="text-2xl font-semibold text-white">
              Ihr Punktestand
            </h2>
          </div>

          <p className="mt-6 text-5xl font-bold text-white">{points}</p>
          <p className="mt-2 text-neutral-300">aktuelle Punkte</p>

          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between text-sm text-neutral-300">
              <span>Nächste Belohnung</span>
              <span>{nextReward} Punkte</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-400 to-red-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-sm text-neutral-300">
              Noch {nextReward - points} Punkte bis zur nächsten Belohnung.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <Gift className="text-orange-400" />
              <h3 className="text-xl font-semibold text-white">
                10% Rabatt Gutschein
              </h3>
            </div>
            <p className="mt-3 text-neutral-400">
              Einlösbar ab 150 Punkten bei Ihrer nächsten Bestellung.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <Trophy className="text-orange-400" />
              <h3 className="text-xl font-semibold text-white">
                Premium Stammkunde
              </h3>
            </div>
            <p className="mt-3 text-neutral-400">
              Exklusive Angebote und Sonderaktionen für wiederkehrende Kunden.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]">
              Belohnung einlösen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
