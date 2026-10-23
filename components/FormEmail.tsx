"use client";

import { useState } from "react";

// Por ahora no envía nada: se conecta a la herramienta de email marketing en el paso 7.
export default function FormEmail() {
  const [enviado, setEnviado] = useState(false);

  return (
    <form
      className="form-email"
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
    >
      <label htmlFor="email-gratis" className="sr-only">
        Tu email
      </label>
      <input
        id="email-gratis"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="tu@email.com"
        required
      />
      <button type="submit" className="btn btn-light">
        Quiero la guía
      </button>
      <p className="form-msg" role="status">
        {enviado ? "Todavía no estamos enviando la guía. Muy pronto vas a poder pedirla acá." : ""}
      </p>
    </form>
  );
}
