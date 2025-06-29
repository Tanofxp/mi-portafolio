export function HomeSection() {
  return (
    <section id="inicio" className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Hola, soy [Tu Nombre]</h1>
      <p className="text-lg text-gray-600">Desarrollador Frontend especializado en React y Node.js</p>
      <a
        href="#proyectos"
        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700"
      >
        Ver proyectos
      </a>
    </section>
  );
}
