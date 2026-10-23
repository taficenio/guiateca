import Catalogo from "@/components/Catalogo";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="wrap row between">
          <div className="logo">Guiateca<span>.</span></div>
          <nav className="nav">
            <a href="#catalogo">Catálogo</a>
            <a href="#planes">Planes</a>
            <a href="#planes">Ingresar</a>
            <a href="#planes" className="btn btn-primary">Suscribite</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap stack">
          <p className="eyebrow">Información ordenada, lista para usar</p>
          <h1>Guías y plantillas curadas que te ahorran horas de búsqueda.</h1>
          <p className="lead">
            Trámites, finanzas, docencia, trabajo e IA explicados paso a paso. Comprá una guía desde USD 2
            o accedé a toda la biblioteca con la suscripción.
          </p>
        </div>
      </section>

      <Catalogo />

      <section className="band">
        <div className="wrap grid3">
          <div><h3>Curado y verificado</h3><p>Cada guía se revisa y actualiza antes de publicarse.</p></div>
          <div><h3>Listo para usar</h3><p>PDF paso a paso y plantillas editables en Excel, Sheets o Canva.</p></div>
          <div><h3>Pagás como quieras</h3><p>Mercado Pago, tarjeta o PayPal. Descarga inmediata.</p></div>
        </div>
      </section>

      <section id="planes" className="wrap section stack">
        <h2>Elegí cómo acceder</h2>
        <div className="grid3">
          <div className="plan">
            <div className="plan-name">Guía suelta</div>
            <div className="plan-price">USD 2–3</div>
            <p>Comprá solo lo que necesitás. Es tuya para siempre.</p>
            <a href="#catalogo" className="btn btn-outline">Ver catálogo</a>
          </div>
          <div className="plan">
            <div className="plan-name">Pack de 10 créditos</div>
            <div className="plan-price">USD 8</div>
            <p>Canjealos por las guías que quieras, sin vencimiento.</p>
            <a href="#planes" className="btn btn-outline">Comprar créditos</a>
          </div>
          <div className="plan plan-featured">
            <div className="row between"><span className="plan-name">Biblioteca completa</span><span className="badge">Recomendado</span></div>
            <div className="plan-price">USD 6<small> /mes</small></div>
            <p>Acceso ilimitado a todas las guías y plantillas, incluidas las nuevas de cada mes.</p>
            <a href="#planes" className="btn btn-primary">Suscribirme</a>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap row between wrap-gap">
          <div className="stack" style={{ maxWidth: 560 }}>
            <h2>Llevate una guía gratis</h2>
            <p>&quot;Checklist para ordenar tus finanzas en un fin de semana&quot;. Te la mandamos por email.</p>
          </div>
          <form className="row form">
            <label htmlFor="em" className="sr-only">Tu email</label>
            <input id="em" type="email" placeholder="tu@email.com" required />
            <button type="submit" className="btn btn-light">Quiero la guía</button>
          </form>
        </div>
      </section>

      <footer className="wrap row between footer">
        <span>© Guiateca · [TU RAZÓN SOCIAL / CUIT]</span>
        <span>Términos · Privacidad · Contacto · Publicá tu guía</span>
      </footer>
    </>
  );
}
