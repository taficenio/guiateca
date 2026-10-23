"use client";

import { useMemo, useRef, useState } from "react";
import { categorias, guias, labelCategoria, type CategoriaId, type Guia } from "@/data/guias";
import VistaPrevia from "./VistaPrevia";

type Filtro = CategoriaId | "todas";

export default function Catalogo() {
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const [busqueda, setBusqueda] = useState("");
  const [seleccionada, setSeleccionada] = useState<Guia | null>(null);
  // Para devolver el foco al botón que abrió la vista previa.
  const disparador = useRef<HTMLButtonElement | null>(null);

  const lista = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();
    return guias.filter(
      (g) =>
        (filtro === "todas" || g.categoria === filtro) &&
        (!texto || `${g.titulo} ${g.resumen}`.toLowerCase().includes(texto))
    );
  }, [filtro, busqueda]);

  const filtros: { id: Filtro; label: string }[] = [
    { id: "todas", label: "Todas" },
    ...categorias,
  ];

  return (
    <section id="catalogo" className="wrap section" aria-labelledby="catalogo-titulo">
      <div className="catalogo-head">
        <h2 id="catalogo-titulo">Explorá la biblioteca</h2>
        <p className="muted" aria-live="polite">
          {lista.length} {lista.length === 1 ? "guía" : "guías"}
        </p>
      </div>

      <div className="buscador">
        <label htmlFor="buscar">Buscar guías</label>
        <input
          id="buscar"
          type="search"
          placeholder="Ej.: monotributo, CV, presupuesto…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="filtros" role="group" aria-label="Filtrar por categoría">
        {filtros.map((f) => (
          <button
            key={f.id}
            type="button"
            className="chip"
            aria-pressed={filtro === f.id}
            onClick={() => setFiltro(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {lista.length === 0 ? (
        <p className="vacio">No encontramos guías con esa búsqueda. Probá con otra palabra.</p>
      ) : (
        <ul className="cards">
          {lista.map((g) => (
            <li key={g.slug} className="card">
              <div className="card-meta">
                <span className="tag">{labelCategoria(g.categoria)}</span>
                <span className="formato">{g.formato}</span>
              </div>
              <h3>{g.titulo}</h3>
              <p>{g.resumen}</p>
              <div className="card-foot">
                <span className="precio">USD {g.precio}</span>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={(e) => {
                    disparador.current = e.currentTarget;
                    setSeleccionada(g);
                  }}
                >
                  Vista previa<span className="sr-only">: {g.titulo}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {seleccionada && (
        <VistaPrevia
          guia={seleccionada}
          onClose={() => {
            setSeleccionada(null);
            disparador.current?.focus();
          }}
        />
      )}
    </section>
  );
}
