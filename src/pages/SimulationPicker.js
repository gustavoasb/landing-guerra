import { useState } from "react"

export default function SimulationPicker() {
  const [simulation, setSimulation] = useState({
    desiredValue: 18000,
    start: 1,
    deadline: 36,

  })

  return (
    <>
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight flex text-gray-900 sm:text-4xl">
          <span className="block">Faça uma&nbsp;</span>
          <span className="block text-blue-600">simulação</span>
        </h2>
        <a
        className="font-medium"
        href="/">
          Voltar
        </a>
      </div>
    </div>
    <div className="bg-white flex w-full">
      <div className="ml-3 w-full">
        <div className="w-3/4 p-5 flex flex-col gap-5">
          <div className="">
            <h3 className="text-xl font-medium">Qual o valor do carro desejado?</h3>
            <div>Motos de<span className="font-medium text-lg text-indigo-600">{` R$${simulation.desiredValue}`}</span></div>
            <input onChange={((e) => setSimulation({...simulation, desiredValue: e.target.value}))} value={simulation.desiredValue} min={18000} max={500000} type="range"/>
          </div>
          <div>
            <h3 className="text-xl font-medium">Quando deseja ser contemplado?</h3>
            <div>No<span className="font-medium text-lg text-indigo-600">{` ${simulation.start}º mês`}</span></div>
            <input onChange={((e) => setSimulation({...simulation, start: e.target.value}))} value={simulation.start} min={1} max={24}  type="range"/>
          </div>
          <div>
            <h3 className="text-xl font-medium">Qual o melhor prazo para você?</h3>
            <div>Quanto maior o prazo, menor a parcela. Sem juros.</div>
            <div><span className="font-medium text-lg text-indigo-600">{`${simulation.deadline} meses`}</span></div>
            <input onChange={((e) => setSimulation({...simulation, deadline: e.target.value}))} value={simulation.deadline} min={36} max={80} type="range"/>
          </div>
        </div>
      </div>
      <div className="w-1/4 rounded-md m-2  shadow h-auto flex flex-col gap-1">
        <div className="p-4 bg-gray-50 flex gap-1 justify-between">
          <h3 className="font-bold text-blue-600 text-lg">Simulação </h3>
          <select className="px-2 py-1 border-blue-100 rounded ouline-blue-100 border-2">
            <option>Carros</option>
            <option>Imovéis</option>
            <option>Moto</option>
            <option>Aeronaves</option>
          </select>
        </div>
        <div className="p-4">
          <div>
            <h3 className="font-medium text-blue-600 text-base">Valor do seu crédito:</h3>
            <div>{simulation.desiredValue}</div>
          </div>
          <div>
            <h3 className="font-medium text-blue-600 text-base">Com contemplação no:</h3>
            <div>{simulation.start}</div>
          </div>
          <div>
            <h3 className="font-medium text-blue-600 text-base">Pagando em:</h3>
            <div>{simulation.deadline}</div>
          </div>
          <div>
            <h3 className="font-medium text-blue-600 text-base">Lance estimado para contemplação:</h3>
            <div>{2900.23}</div>
          </div>
          <div>
            <h3 className="font-medium text-blue-600 text-base">Valor da parcela antes do lance:</h3>
            <div>{880.89}</div>
          </div>
          <div>
            <h3 className="font-medium text-blue-600 text-base">Valor da parcela depois do lance:</h3>
            <div>{340.5}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
