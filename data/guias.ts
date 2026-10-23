// Catálogo de ejemplo. En el paso 2 de la hoja de ruta esto pasa a la base de datos.

export type CategoriaId = "tramites" | "finanzas" | "docentes" | "trabajo" | "ia";

export type Categoria = { id: CategoriaId; label: string };

export type Guia = {
  slug: string;
  titulo: string;
  categoria: CategoriaId;
  formato: string;
  resumen: string;
  precio: number; // en USD
  paraQuien: string;
  indice: string[];
};

export const categorias: Categoria[] = [
  { id: "tramites", label: "Trámites y emigrar" },
  { id: "finanzas", label: "Finanzas personales" },
  { id: "docentes", label: "Docentes" },
  { id: "trabajo", label: "Trabajo y CV" },
  { id: "ia", label: "IA práctica" },
];

export const guias: Guia[] = [
  {
    slug: "ciudadania-italiana-paso-a-paso",
    titulo: "Ciudadanía italiana paso a paso",
    categoria: "tramites",
    formato: "PDF",
    resumen:
      "Cómo armar tu árbol genealógico, qué actas pedir, dónde legalizarlas y cómo prepararte para el turno.",
    precio: 3,
    paraQuien:
      "Descendientes de italianos que quieren iniciar el trámite y no saben por dónde empezar.",
    indice: [
      "¿Te corresponde? Requisitos y línea de descendencia",
      "Qué actas necesitás y dónde pedirlas",
      "Apostilla, traducciones y rectificaciones",
      "Consulado o Italia: pros y contras de cada vía",
      "Checklist final antes del turno",
    ],
  },
  {
    slug: "alta-de-monotributo",
    titulo: "Alta de monotributo sin vueltas",
    categoria: "tramites",
    formato: "PDF",
    resumen:
      "Elegí la categoría correcta, hacé el alta online y emití tu primera factura sin errores.",
    precio: 2,
    paraQuien: "Personas que empiezan a facturar por primera vez como independientes.",
    indice: [
      "Qué es el monotributo y cuándo conviene",
      "Cómo elegir tu actividad y categoría",
      "Alta online paso a paso",
      "Tu primera factura electrónica",
      "Vencimientos y recategorización",
    ],
  },
  {
    slug: "comprar-auto-usado",
    titulo: "Comprar un auto usado sin sorpresas",
    categoria: "tramites",
    formato: "PDF + checklist",
    resumen:
      "Qué revisar antes de pagar, qué papeles pedir y cómo hacer la transferencia de forma segura.",
    precio: 2,
    paraQuien: "Quien va a comprar su primer auto usado a un particular o en una agencia.",
    indice: [
      "Antes de ver el auto: precio de referencia y deudas",
      "Revisión mecánica: checklist imprimible",
      "Documentación que te tienen que mostrar",
      "Pago seguro y transferencia",
      "Seguro y primeros trámites como dueño",
    ],
  },
  {
    slug: "presupuesto-familiar",
    titulo: "Presupuesto familiar en una planilla",
    categoria: "finanzas",
    formato: "Plantilla Sheets",
    resumen:
      "Planilla lista para cargar ingresos y gastos, con gráficos automáticos y alertas de desvío.",
    precio: 2,
    paraQuien: "Familias y personas que quieren saber a dónde se va la plata cada mes.",
    indice: [
      "Cómo usar la planilla en 10 minutos",
      "Categorías de gasto recomendadas",
      "Gastos fijos, variables y anuales",
      "Lectura de los gráficos",
      "Rutina mensual de revisión",
    ],
  },
  {
    slug: "ahorrar-con-inflacion",
    titulo: "Ahorrar con inflación: guía práctica",
    categoria: "finanzas",
    formato: "PDF",
    resumen:
      "Opciones para proteger tus ahorros explicadas en simple, con sus riesgos y cuándo usar cada una.",
    precio: 3,
    paraQuien: "Personas sin experiencia en inversiones que quieren que su plata no pierda valor.",
    indice: [
      "Fondo de emergencia: cuánto y dónde",
      "Plazo fijo, fondos comunes y cuentas remuneradas",
      "Dólar: formas de acceso y costos",
      "Riesgo, liquidez y plazo explicados fácil",
      "Armá tu plan en tres pasos",
    ],
  },
  {
    slug: "planificacion-primaria",
    titulo: "Planificación anual para primaria",
    categoria: "docentes",
    formato: "Plantilla Docs",
    resumen:
      "Plantilla editable de planificación anual y por unidad, con ejemplos completos por área.",
    precio: 3,
    paraQuien: "Docentes de nivel primario que quieren ahorrar tiempo al planificar.",
    indice: [
      "Estructura de la planificación anual",
      "Cómo redactar propósitos y objetivos",
      "Secuencias didácticas: modelo para completar",
      "Criterios e instrumentos de evaluación",
      "Ejemplos por área",
    ],
  },
  {
    slug: "fichas-comprension-lectora",
    titulo: "Fichas de comprensión lectora",
    categoria: "docentes",
    formato: "PDF imprimible + Canva",
    resumen:
      "30 fichas con textos breves y actividades graduadas, listas para imprimir o adaptar en Canva.",
    precio: 2,
    paraQuien: "Docentes de 2.º a 5.º grado y familias que acompañan la lectura en casa.",
    indice: [
      "Cómo usar las fichas en el aula",
      "Fichas de nivel inicial (1 a 10)",
      "Fichas de nivel intermedio (11 a 20)",
      "Fichas de nivel avanzado (21 a 30)",
      "Respuestas sugeridas",
    ],
  },
  {
    slug: "cv-que-pasa-filtros",
    titulo: "CV que pasa los filtros",
    categoria: "trabajo",
    formato: "Plantilla Docs + PDF",
    resumen:
      "Plantilla de CV clara y compatible con sistemas de selección, más una guía para redactar logros.",
    precio: 2,
    paraQuien: "Quien está buscando trabajo y no recibe respuestas a sus postulaciones.",
    indice: [
      "Qué mira un reclutador en 10 segundos",
      "Estructura recomendada y errores comunes",
      "Cómo escribir logros con números",
      "Adaptar el CV a cada búsqueda",
      "Perfil de LinkedIn alineado al CV",
    ],
  },
  {
    slug: "clientes-como-freelancer",
    titulo: "Conseguir clientes como freelancer",
    categoria: "trabajo",
    formato: "PDF",
    resumen:
      "Cómo definir tu oferta, poner precio y conseguir los primeros clientes, con mensajes modelo.",
    precio: 3,
    paraQuien: "Freelancers que empiezan o quieren dejar de depender del boca a boca.",
    indice: [
      "Definí qué vendés y a quién",
      "Cómo calcular tu precio por proyecto",
      "Portfolio mínimo que convence",
      "Mensajes modelo para contactar clientes",
      "Presupuestos y acuerdos por escrito",
    ],
  },
  {
    slug: "prompts-para-inmobiliarias",
    titulo: "Prompts de IA para inmobiliarias",
    categoria: "ia",
    formato: "PDF",
    resumen:
      "Más de 50 prompts listos para descripciones de propiedades, respuestas a consultas y redes.",
    precio: 3,
    paraQuien: "Agentes y equipos inmobiliarios que quieren ahorrar tiempo con IA.",
    indice: [
      "Cómo escribir un buen prompt",
      "Descripciones de propiedades que venden",
      "Respuestas rápidas a consultas",
      "Publicaciones para redes sociales",
      "Revisión y cuidado de datos personales",
    ],
  },
  {
    slug: "ia-para-docentes",
    titulo: "IA para docentes: primeros pasos",
    categoria: "ia",
    formato: "PDF",
    resumen:
      "Usá la IA para preparar clases, actividades y rúbricas, con ejemplos y buenas prácticas.",
    precio: 2,
    paraQuien: "Docentes de cualquier nivel que nunca usaron IA o la usan poco.",
    indice: [
      "Qué puede y qué no puede hacer la IA",
      "Preparar clases y actividades",
      "Crear rúbricas y consignas",
      "Adaptar materiales a distintos niveles",
      "Uso responsable con estudiantes",
    ],
  },
];

export const labelCategoria = (id: CategoriaId) =>
  categorias.find((c) => c.id === id)?.label ?? id;
