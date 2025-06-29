export function ContactSection() {
  return (
    <section id="contacto">
      <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          className="w-full border p-2 rounded"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
