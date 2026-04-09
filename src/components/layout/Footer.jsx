function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-neutral-400 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-3 text-white">NARANJ Demo</h3>
          <p>
            Premium Frontend-Demo für ein modernes Restaurant-Bestellsystem mit
            Lieferung, Abholung und Treuepunkten.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-white">Kontakt</h3>
          <p>WhatsApp Bestellungen</p>
          <p>Direkte Online-Bestellung</p>
          <p>Mobile-First Experience</p>
        </div>

        <div>
          <h3 className="mb-3 text-white">Öffnungszeiten</h3>
          <p>Mo - So: 11:00 - 23:00</p>
          <p>Lieferung & Abholung verfügbar</p>
          <p>Mülheim an der Ruhr</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
