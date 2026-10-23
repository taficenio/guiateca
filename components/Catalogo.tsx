"use client";

import { useMemo, useState } from "react";
import { categorias, guias, type CategoriaId, type Guia } from "@/data/guias";

const labelDe = (id: CategoriaId) => categorias.find((c) => c.id === id)?.label ?? id;

export default function Catalogo() {
  const [cat, setCat] = useState<CategoriaId | "todas">("todas");
  const [q, setQ] = useState("");
  const [sel, setSel] = useState<Guia | null>(null);

  const lista = useMemo(() => {
    const t = q.trim().toLowerCase();
    return guias.filter(
      (g) =>
        (cat === "todas" || g.categoria === cat) &&
        (!t || `${g.titulo} ${g.resumen}`.toLowerCase().includes(t))
    );
  }, [cat, q]);

  return (
    <section id="catalogo" className="wrap section stack">
      <div className="row between wrap-gap">
        <h2>Explorá la biblioteca</h2>
        <p className="muted">{lista.length} {lista.length === 1 ? "guía" : "guías"}</p>
      </div>

      <label htmlFor="q" className="sr-only">Buscar guías</label>
      <input
        id="q"
        type="search"
        className="search"
        placeholder="Buscá: monotributo, ciudadanía italiana, presupuesto…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="pills">
        {[{ id: "todas" as const, label: "Todas" }, ...categorias].map((c) => (
          <button
            key={c.id}
            type="button"
            className={`pill ${cat === c.id ? "pill-active" : ""}`}
            aria-pressed={cat === c.id}
            onClick={() => setCat(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="catalog">
        <div className="cards">
          {lista.map((g) => (
            <article key={g.slug} className="card">
              <div className="row between">
                <span className="eyebrow small">{labelDe(g.categoria)}</span>
                <span className="muted small">{g.formato}</span>
              </div>
              <h3>{g.titulo}</h3>
              <p className="muted">{g.resumen}</p>
              <div className="row between card-foot">
                <span className="price">USD {g.precioUsd}</span>
                <button type="button" className="btn btn-outline-blue" onClick={() => setSel(g)}>
                  Vista previa
                </button>
              </div>
            </article>
          ))}
          {lista.length === 0 && <p className="muted">No encontramos guías con esa búsqueda.</p>}
        </div>

        <aside className="preview" aria-live="polite">
          {!sel ? (
            <>
              <h3>Vista previa</h3>
              <p className="muted">Elegí una guía para ver su índice, para quién sirve y cómo acceder.</p>
            </>
          ) : (
            <>
              <span className="eyebrow small">{labelDe(sel.categoria)} · {sel.formato}</span>
              <h3>{sel.titulo}</h3>
              <p className="muted"><strong>Para quién:</strong> {sel.paraQuien}</p>
              <strong>Índice</strong>
              <ol>{sel.indice.map((t) => <li key={t}>{t}</li>)}</ol>
              {/* TODO: conectar al checkout (ver CLAUDE.md) */}
              <button type="button" className="btn btn-primary">Comprar por USD {sel.precioUsd}</button>
              <a href="#planes" className="btn btn-outline">Incluida en la suscripción</a>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
