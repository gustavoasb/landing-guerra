export default function Stats() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex flex-col lg:items-center lg:justify-between">
        <h3 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Segurança, qualidade e velocidade.</span>
        </h3>
        <div className="mt-8 flex flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <div className="font-bold text-4xl text-blue-600">
              10000
            </div>
            <div className="text-xl">
              clientes atendidos
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="font-bold text-4xl text-blue-600">
              4000
            </div>
            <div className="text-xl">
              imóveis entregues
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="font-bold text-4xl text-blue-600">
              10%
            </div>
            <div className="text-xl">
              de redução de taxa
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
