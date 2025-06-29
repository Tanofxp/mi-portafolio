export function ProjectsSection() {
  return (
    <section id="proyectos">
      <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Reemplaza estos con tus propios proyectos */}
        <div className="border rounded-xl p-4 shadow">
          <h3 className="font-bold text-lg">Nombre del Proyecto</h3>
          <p className="text-sm text-gray-600">Descripción breve del proyecto.</p>
          <a href="#" className="text-blue-600 hover:underline text-sm">Ver en GitHub</a>
        </div>
      </div>
    </section>
  );
}
