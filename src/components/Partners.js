import LogoBb from "../assets/bb-logo.png"
import LogoItau from "../assets/itau-logo-1.png"
import LogoCaixa from "../assets/caixa-logo.png"

export default function Simulation() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mr-8">
          <span className="block">Autorizados</span>
          <span className="block text-blue-600">por</span>
        </h2>
        <div>
          <div className="mb-8 lg:flex lg:items-center">
            <img className="mr-4 h-8 w-auto sm:h-16"
              src={LogoBb}
            />
            <img className="mr-4 h-8 w-auto sm:h-16"
              src={LogoItau}
            />
            <img className="h-4 w-auto sm:h-8"
              src={LogoCaixa}
            />
          </div>
        Somos representantes credenciados às mais sólidas administradoras do país, todas reguladas pelo Banco Central do Brasil. Conte com a nossa equipe para entender o funcionamento do consórcio, como utilizar e a melhor forma de 
        contemplar a sua cota. Prestamos <span className="font-medium">assessoria exclusiva</span> antes, durante e após a contratação.
        </div>
      </div>
    </div>
  )
}
