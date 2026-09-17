"use client";

import React, { useState } from "react";

// Estructura de datos para los proyectos de Python
interface ProyectoPython {
  id: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  tecnologias: string[];
  linkGithub: string;
  demoDisponible: boolean;
}

const PROYECTOS: ProyectoPython[] = [
  {
    id: "calculadora",
    titulo: "Calculadora de Métricas & Lógica",
    categoria: "Fundamentos / Algoritmos",
    descripcion:
      "Módulo interactivo para el procesamiento de operaciones matemáticas y lógica de scripts.",
    tecnologias: ["Python 3.12", "FastAPI", "Pydantic"],
    linkGithub:
      "https://github.com/tu-usuario/python-projects-2026/tree/main/backend/projects",
    demoDisponible: false,
  },
  {
    id: "data-analysis",
    titulo: "Procesador de Datos y Archivos",
    categoria: "Ciencia de Datos / Automatización",
    descripcion:
      "Análisis automatizado de datasets y extracción de información mediante scripts en Python.",
    tecnologias: ["Python", "Pandas", "OpenPyXL"],
    linkGithub: "https://github.com/tu-usuario/python-projects-2026",
    demoDisponible: false,
  },
  {
    id: "web-scraper",
    titulo: "Extracción de Datos Web (Scraper)",
    categoria: "Automatización & Web",
    descripcion:
      "Automatización de recolección de datos estructurados desde portales públicos.",
    tecnologias: ["Python", "BeautifulSoup4", "Requests"],
    linkGithub: "https://github.com/tu-usuario/python-projects-2026",
    demoDisponible: false,
  },
];

export default function LandingPage() {
  const [filtro, setFiltro] = useState<string>("Todos");

  const categorias = [
    "Todos",
    "Fundamentos / Algoritmos",
    "Ciencia de Datos / Automatización",
    "Automatización & Web",
  ];

  const proyectosFiltrados =
    filtro === "Todos"
      ? PROYECTOS
      : PROYECTOS.filter((p) => p.categoria === filtro);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header / Hero Section */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🐍</span>
            <span className="font-bold text-lg tracking-wide text-indigo-400">
              Python Projects <span className="text-slate-400">2026</span>
            </span>
          </div>
          <a
            href="https://github.com/tu-usuario/python-projects-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-full border border-slate-700 transition"
          >
            Ver en GitHub
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Presentación para Reclutadores */}
        <section className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Showcase de Código & Portafolio Técnico
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Explora mis prácticas e implementaciones en{" "}
            <span className="text-indigo-400">Python</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg">
            Plataforma interactiva diseñada para reclutadores y líderes
            técnicos. Cada tarjeta representa un módulo del repositorio
            organizado con código limpio, arquitectura escalable y
            demostraciones.
          </p>
        </section>

        {/* Filtros de Categoría */}
        <section className="flex flex-wrap gap-2 justify-center">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filtro === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Grid de Proyectos */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosFiltrados.map((proyecto) => (
            <article
              key={proyecto.id}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-medium text-indigo-400 bg-indigo-950/50 px-2.5 py-1 rounded border border-indigo-900/50">
                    {proyecto.categoria}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
                  {proyecto.titulo}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botones de acción */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex gap-3">
                <a
                  href={`/proyecto/${proyecto.id}`}
                  className="flex-1 text-center bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-2.5 rounded-lg transition"
                >
                  Ver Proyecto
                </a>
                <a
                  href={proyecto.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition border border-slate-700"
                  title="Código fuente"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>Desarrollado con Next.js, Tailwind CSS y FastAPI • 2026</p>
      </footer>
    </div>
  );
}
