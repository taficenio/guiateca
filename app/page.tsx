import Catalogo from "@/components/Catalogo";
import FormEmail from "@/components/FormEmail";

export default function Home() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <header className="header">
        <div className="wrap header-inner">
          <a href="/" className="logo" aria-label="Guiateca, inicio">
            Guiateca<span aria-hidden="true">.</span>
          </a>
          <nav className="nav" aria-label="Principal">
            <a href="#catalogo">Catálogo</a>
            <a href="#planes">Planes</a>
            <a href="#planes">Ingresar</a>
            <a href="#planes" className="btn btn-primary">
              Suscribite
            </a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="hero">
          <div className="wrap hero-inner">
            <p className="eyebrow">Información ordenada, lista para usar</p>
            <h1>Guías y plantillas curadas que te ahorran horas de búsqueda.</h1>
            <p className="lead">
              Trámites, finanzas, docencia, trabajo e IA explicados paso a paso. Comprá una guía
              desde USD 2 o accedé a toda la biblioteca con la suscripción.
            </p>
          </div>
        </section>

        <Catalogo />

        <section className="band" aria-labelledby="beneficios-titulo">
          <div className="wrap">
            <h2 id="beneficios-titulo" className="sr-only">
              Por qué Guiateca
            </h2>
            <div className="grid3">
              <div className="beneficio">
                <h3>Curado y verificado</h3>
                <p>Cada guía se revisa y se actualiza antes de publicarse.</p>
              </div>
              <div className="beneficio">
                <h3>Listo para usar</h3>
                <p>PDF paso a paso y plantillas editables en Sheets, Docs o Canva.</p>
              </div>
              <div className="beneficio">
                <h3>Pagás como quieras</h3>
                <p>Mercado Pago o tarjeta, en pesos o en dólares. Descarga inmediata.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="planes" className="wrap section" aria-labelledby="planes-titulo">
          <h2 id="planes-titulo">Elegí cómo acceder</h2>
          <div className="grid3 planes">
            <article className="plan">
              <h3 className="plan-name">Guía suelta</h3>
              <p className="plan-price">USD 2–3</p>
              <p>Comprá solo lo que necesitás. Es tuya para siempre.</p>
              <a href="#catalogo" className="btn btn-outline">
                Ver catálogo
              </a>
            </article>
            <article className="plan">
              <h3 className="plan-name">Pack de 10 créditos</h3>
              <p className="plan-price">USD 8</p>
              <p>Canjeá cada crédito por la guía que quieras. No vencen.</p>
              <button type="button" className="btn btn-outline">
                Comprar créditos
              </button>
            </article>
            <article className="plan plan-featured">
              <div className="plan-top">
                <h3 className="plan-name">Biblioteca completa</h3>
                <span className="badge">Recomendado</span>
              </div>
              <p className="plan-price">
                USD 6<small> /mes</small>
              </p>
              <p>Acceso ilimitado a todas las guías y plantillas, incluidas las nuevas de cada mes.</p>
              <button type="button" className="btn btn-primary">
                Suscribirme
              </button>
            </article>
          </div>
        </section>

        <section className="dark" aria-labelledby="gratis-titulo">
          <div className="wrap dark-inner">
            <div className="dark-text">
              <h2 id="gratis-titulo">Llevate una guía gratis</h2>
              <p>
                “Checklist para ordenar tus finanzas en un fin de semana”. Dejanos tu email y te la
                mandamos.
              </p>
            </div>
            <FormEmail />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p>© {new Date().getFullYear()} Guiateca · [TU RAZÓN SOCIAL / CUIT]</p>
          <nav aria-label="Legal" className="footer-nav">
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
            <a href="#">Contacto</a>
            <a href="#">Publicá tu guía</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
