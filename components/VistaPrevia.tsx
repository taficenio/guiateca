"use client";

import { useEffect, useRef } from "react";
import { labelCategoria, type Guia } from "@/data/guias";

type Props = { guia: Guia; onClose: () => void };

// Panel lateral con la vista previa de una guía.
export default function VistaPrevia({ guia, onClose }: Props) {
  const panel = useRef<HTMLDivElement>(null);
  const cerrar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    cerrar.current?.focus();
    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Mantiene el foco del teclado dentro del panel.
      if (e.key === "Tab" && panel.current) {
        const foco = panel.current.querySelectorAll<HTMLElement>("button, a[href]");
        const primero = foco[0];
        const ultimo = foco[foco.length - 1];
        if (e.shiftKey && document.activeElement === primero) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primero.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflowPrevio;
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        ref={panel}
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vp-titulo"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-head">
          <span className="tag">{labelCategoria(guia.categoria)}</span>
          <button
            ref={cerrar}
            type="button"
            className="btn-icon"
            onClick={onClose}
            aria-label="Cerrar vista previa"
          >
            ×
          </button>
        </div>

        <h2 id="vp-titulo">{guia.titulo}</h2>
        <p className="muted">{guia.formato}</p>

        <h3>Para quién</h3>
        <p>{guia.paraQuien}</p>

        <h3>Índice</h3>
        <ol className="indice">
          {guia.indice.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <div className="drawer-foot">
          <button type="button" className="btn btn-primary btn-block">
            Comprar por USD {guia.precio}
          </button>
          <a href="#planes" className="link" onClick={onClose}>
            Incluida en la suscripción
          </a>
        </div>
      </div>
    </div>
  );
}
