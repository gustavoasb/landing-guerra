export default function Contact() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4 lg:mb-0">
          <span className="block">Ligamos para você</span>
        </h2>
        <form className="flex flex-row flex-wrap gap-2 w-3/2 bg-blue-100 p-2 shadow">
          <input
            className="px-2 py-1 w-full outline-blue-100"
            placeholder="Nome"
          />
          <input
            className="px-2 py-1 w-full outline-blue-100"
            placeholder="Código de Área + Telefone"
          />
          <input
            className="px-2 py-1 w-3/4 outline-blue-100"
            placeholder="Data"
          />
          <select
            className="px-2 py-1 w-1/5 outline-blue-100"
            placeholder="Período"
          >
            <option>Manhã</option>
            <option>Tarde</option>
          </select>
        </form>
      </div>
    </div>
  );
}
