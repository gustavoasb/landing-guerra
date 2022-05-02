export default function Steps() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between gap-8">
        <div className="mt-8 flex flex-row flex-wrap md:flex-nowrap md:justify-center mb-6 md:mb-0 items-center gap-8">
          <div className="flex flex-col gap-1 justify-center">
            <div className="font-bold text-3xl text-blue-600">1.</div>
            <div className="text-xl">
              Faça a simulação de seus créditos de forma rápida e intuitiva
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-3xl text-blue-600">2.</div>
            <div className="text-xl">Entre em contato com a nossa equipe</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-3xl text-blue-600">3.</div>
            <div className="text-xl">
              Iremos te mostrar as melhores opções de crédito
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-3xl text-blue-600">4.</div>
            <div className="text-xl">Seu objetivo realizado</div>
          </div>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          <span className="block">O passo a passo do</span>
          <span className="block text-blue-600">creditado</span>
        </h2>
      </div>
    </div>
  );
}
