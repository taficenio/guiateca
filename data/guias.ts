export type CategoriaId = "tramites" | "finanzas" | "docentes" | "trabajo" | "ia";

export const categorias: { id: CategoriaId; label: string }[] = [
  { id: "tramites", label: "Trámites y emigrar" },
  { id: "finanzas", label: "Finanzas personales" },
  { id: "docentes", label: "Docentes" },
  { id: "trabajo", label: "Trabajo y CV" },
  { id: "ia", label: "IA práctica" },
];

export type Guia = {
  slug: string;
  categoria: CategoriaId;
  titulo: string;
  resumen: string;
  paraQuien: string;
  formato: string;
  precioUsd: number;
  indice: string[];
};

// Catálogo de ejemplo. Reemplazar por la base de datos (ver CLAUDE.md).
export const guias: Guia[] = [
  { slug: "ciudadania-italiana", categoria: "tramites", formato: "PDF · 24 págs", precioUsd: 3, titulo: "Ciudadanía italiana paso a paso", resumen: "Documentos, traducciones, turnos y costos estimados, en orden.", paraQuien: "Descendientes de italianos que quieren iniciar el trámite sin gestor.", indice: ["¿Te corresponde? Cómo verificarlo", "Partidas y apostillas: qué pedir y dónde", "Vía consulado vs. vía judicial", "Checklist final y errores comunes"] },
  { slug: "alta-monotributo", categoria: "tramites", formato: "PDF · 12 págs", precioUsd: 2, titulo: "Alta de monotributo sin errores", resumen: "Cómo inscribirte, elegir categoría y emitir tu primera factura.", paraQuien: "Freelancers y emprendedores que facturan por primera vez.", indice: ["Requisitos y clave fiscal", "Cómo elegir tu categoría", "Emitir factura electrónica", "Recategorización y vencimientos"] },
  { slug: "auto-usado", categoria: "tramites", formato: "PDF · 16 págs", precioUsd: 2, titulo: "Comprar un auto usado sin sorpresas", resumen: "Verificaciones, papeles y preguntas antes de pagar.", paraQuien: "Quien compra su primer auto usado a un particular.", indice: ["Informe de dominio y multas", "Revisión mecánica básica", "Transferencia y costos", "Señales de alerta"] },
  { slug: "presupuesto-familiar", categoria: "finanzas", formato: "Plantilla Sheets", precioUsd: 3, titulo: "Presupuesto familiar automático", resumen: "Planilla editable con categorías, metas de ahorro y gráficos.", paraQuien: "Familias que quieren saber en qué se va la plata cada mes.", indice: ["Cómo cargar ingresos y gastos", "Categorías sugeridas", "Metas de ahorro", "Lectura del resumen mensual"] },
  { slug: "ahorrar-invertir-inflacion", categoria: "finanzas", formato: "PDF · 20 págs", precioUsd: 3, titulo: "Ahorrar e invertir con inflación", resumen: "Opciones básicas explicadas en simple, con pros y contras.", paraQuien: "Principiantes que nunca invirtieron.", indice: ["Fondo de emergencia", "Instrumentos básicos explicados", "Riesgo: cómo pensarlo", "Armar tu primer plan"] },
  { slug: "planificacion-primaria", categoria: "docentes", formato: "PDF + Canva", precioUsd: 3, titulo: "Planificación anual de primaria", resumen: "Estructura editable por trimestre, lista para adaptar.", paraQuien: "Docentes de nivel primario.", indice: ["Plantilla por trimestre", "Ejemplos de secuencias", "Rúbricas de evaluación", "Versión editable en Canva"] },
  { slug: "comprension-lectora", categoria: "docentes", formato: "PDF · 40 fichas", precioUsd: 2, titulo: "Fichas de comprensión lectora", resumen: "Actividades imprimibles por nivel de dificultad.", paraQuien: "Docentes y familias de alumnos de 2.º a 5.º grado.", indice: ["Nivel inicial", "Nivel intermedio", "Nivel avanzado", "Claves de corrección"] },
  { slug: "cv-filtros", categoria: "trabajo", formato: "Plantilla Docs", precioUsd: 2, titulo: "CV que pasa los filtros", resumen: "Plantilla editable y guía para redactar logros.", paraQuien: "Personas que buscan trabajo en relación de dependencia o remoto.", indice: ["Estructura recomendada", "Cómo escribir logros", "Palabras clave", "Carta de presentación modelo"] },
  { slug: "clientes-freelancer", categoria: "trabajo", formato: "PDF · 18 págs", precioUsd: 3, titulo: "Conseguir clientes como freelancer", resumen: "Dónde buscar, cómo cotizar y cómo cobrar desde el exterior.", paraQuien: "Freelancers que arrancan o quieren cobrar en dólares.", indice: ["Plataformas y canales", "Cómo armar tu portfolio", "Cotizar sin regalarte", "Opciones para cobrar"] },
  { slug: "prompts-inmobiliarias", categoria: "ia", formato: "PDF · 100 prompts", precioUsd: 2, titulo: "Prompts para inmobiliarias", resumen: "Instrucciones listas para avisos, respuestas y seguimiento.", paraQuien: "Agentes y corredores inmobiliarios.", indice: ["Descripciones de propiedades", "Respuestas a consultas", "Seguimiento de clientes", "Contenido para redes"] },
  { slug: "ia-docentes", categoria: "ia", formato: "PDF · 22 págs", precioUsd: 3, titulo: "IA para docentes en 1 hora", resumen: "Cómo preparar clases, evaluaciones y material con IA.", paraQuien: "Docentes sin experiencia previa con IA.", indice: ["Primeros pasos", "Planificar una clase", "Crear evaluaciones", "Límites y buenas prácticas"] },
];
